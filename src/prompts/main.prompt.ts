import fs from 'fs';
import inquirer from 'inquirer';
import download from '../utils/download.js';

export default async () => {
    const ans = await inquirer.prompt([
        {
            type: 'input',
            name: 'json',
            message:
                'JSON file path generated by instruction from https://github.com/sayeed205/plural-ripper',
            validate: (input: string) => {
                if (!fs.existsSync(input)) {
                    return 'JSON file does not exist';
                }
                return true;
            },
        },
        {
            type: 'input',
            name: 'output',
            message: 'Output directory path',
            default: './',
        },
    ]);

    const { json, output } = ans;

    download(json, output);
};
