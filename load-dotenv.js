import {writeFile} from 'fs';
import colors from 'colors';
import dotenv from 'dotenv';

dotenv.config()

const targetPath = [
  './src/environments/environment.ts',
  './src/environments/environment.prod.ts',
];

if (!('API_KEY' in process.env)) {
  throw console.error('You must pass API_KEY variable in .env file!');
}

const envConfigFile = (prod) => `export const environment = {
   apiKey: '${process.env['API_KEY']}',
   production: ${!!prod},
};
`;

targetPath.forEach((envFilePath, index) => {
  writeFile(envFilePath, envConfigFile(index), function (err) {
    if (err) {
      throw console.error(err);
    } else {
      console.log(colors.magenta(`Angular environment.ts file generated correctly at ${targetPath} \n`));
    }
  });
})
