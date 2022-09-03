#!/usr/bin/env node
const sade = require("sade");
const ora = require("ora");
const inquirer = require("inquirer");
const fs = require("fs-extra");
const path = require("path");
const shell = require("shelljs");
const chalk = require("chalk");
const pkgInfo = require('../package.json');

const { version } = pkgInfo;

// 创建控制台对象实例
const prog = sade("xx");

// 定义命令
prog
    .version(version)
    .command("create <pkgName>")
    .option("--template")
    .describe("choose a template")
    .example("create my-project --template ts-react")
    .action(async (pkgName: string) => {
        console.log(chalk.red(`🚀====准备开始创建${pkgName}项目=====`));
        const { template } = await inquirer.prompt({
            type: "list",
            name: "template",
            choices: ["vue2", "vue3", "react", "react-ts"],
        });

        const templateSpinner = ora('loading template...').start();
        const realPath = await fs.realpath(process.cwd());
        const projectPath = `${realPath}/${pkgName}`;
        await fs.copy(path.resolve(__dirname, `../templates/${template}`), projectPath, { overwrite: true });
        templateSpinner.succeed('模板加载完毕');

        const installSpinner = ora('installing...').start();
        process.chdir(projectPath);
        shell.exec('npm i');
        installSpinner.succeed('依赖安装完毕');

        console.log(chalk.green('done'));
    });

prog.version(version)
    .command('build')
    .option("--config")
    .describe("build your project")
    .example("build --config prod.config.js")
    .action((args: string[]) => {
        console.log("🚀", "开始构建，请耐心等待", args);
    });

prog.version(version)
    .command('watch')
    .describe("watch and build your project")
    .example("watch")
    .action(() => {
        console.log("🚀", "监听代码变动中");
    });

prog.version(version)
    .command('deploy')
    .describe("deploy your project")
    .example("deploy")
    .action(() => {
        console.log("🚀", "代码部署中 ");
    });

// 解析
prog.parse(process.argv);