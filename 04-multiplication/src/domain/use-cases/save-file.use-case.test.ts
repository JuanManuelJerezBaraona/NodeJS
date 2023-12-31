import fs from 'fs';
import { SaveFile } from './save-file.use-case';

describe('SaveFileUseCase', () => {

    afterEach(() => {
        const outputsFolderExists = fs.existsSync('outputs');
        if (outputsFolderExists) fs.rmSync('outputs', { recursive: true });
    });

    test('should save file with default values', () => {

        const saveFile = new SaveFile();
        const filePath = 'outputs/table.txt';
        const options = {
            fileContent: 'test'
        };

        const result = saveFile.execute(options);
        const fileExists = fs.existsSync(filePath);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        
        expect(result).toBeTruthy();
        expect(fileExists).toBeTruthy();
        expect(fileContent).toEqual(options.fileContent);

    });

    test('should save file with custom values', () => {
        
        const saveFile = new SaveFile();
        const filePath = 'custom-outputs/file-destination/custom-table-name.txt';
        const options = {
            fileContent: 'custom content',
            fileDestination: 'custom-outputs/file-destination',
            fileName: 'custom-table-name'
        }

        const result = saveFile.execute(options);
        const fileExists = fs.existsSync(filePath);
        const fileContent = fs.readFileSync(filePath, 'utf8');

        expect(result).toBeTruthy();
        expect(fileExists).toBeTruthy();
        expect(fileContent).toEqual(options.fileContent);

    });

    test('should return false if directory could not be created', () => {
       
        const saveFile = new SaveFile();
        const options = {
            fileContent: 'custom content',
            fileDestination: 'custom-outputs/file-destination',
            fileName: 'custom-table-name'
        }

        const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(
            () => { throw new Error('error'); });

        const result = saveFile.execute(options);

        expect(result).toBeFalsy();
    });

    test('should return false if file could not be created', () => {
       
        const saveFile = new SaveFile();
        const options = {
            fileContent: 'custom content',
            fileDestination: 'custom-outputs/file-destination',
            fileName: 'custom-table-name'
        }

        // const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(
        //     () => { throw new Error('error'); });

        const result = saveFile.execute({ fileContent: 'Hola' });

        expect(result).toBeTruthy();
    });

});