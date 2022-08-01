import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  createReadStream,
  writeFileSync,
  readFileSync,
  appendFileSync,
} from 'node:fs';
import * as readline from 'node:readline';
import { once } from 'node:events';
import { execSync } from 'node:child_process';

(async function createFiles() {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const rl = readline.createInterface({
      input: createReadStream(join(__dirname, 'names')),
      crlfDelay: Infinity,
    });

    const namesArr = [];

    rl.on('line', (line) => {
      namesArr.push(line);
    });

    await once(rl, 'close');

    const svgContent = readFileSync(join(__dirname, 'svg'), 'utf-8');

    const svgArr = svgContent.match(/<svg[^>]*>(.|\s)*?<\/svg>/g);

    if (namesArr.length !== svgArr.length) {
      throw new Error('The number of names is not equal to the number of svg');
    }

    namesArr.forEach((name, i) => {
      writeFileSync(join(__dirname, '..', 'assets', `${name}.svg`), svgArr[i]);

      appendFileSync(
        join(__dirname, '..', 'src', 'tests', 'UnisIcons.test.tsx'),
        `\ndescribe('${name}', () => {
  test('should render correctly', async () => {
    render(<UnisIcons.${name} data-testid="test" />);

    expect(screen.getByTestId('test')).toBeVisible();
  });
});\n`
      );

      writeFileSync(
        join(__dirname, '..', 'demo', 'src', 'App.tsx'),
        `import * as React from 'react';
import { ${name} } from '../../src';

function App() {
  return (
    <div className="p-4 text-gray-900">
      <${name} />
    </div>
  );
}

export default App;\n`
      );

      execSync(
        `yarn svgr && git add . && git cm -m "feat(components): add ${name}"`
      );
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
})();
