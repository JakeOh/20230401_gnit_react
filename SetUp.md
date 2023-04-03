# [Scoop](https://scoop.sh/)
A command-line installer for Windows

## 설치 방법
- [Install Guide](https://github.com/ScoopInstaller/Install#readme)
- Windows PowerShell 실행
- PowerShell 실행 정책 확인

  `> Get-ExecutionPolicy`

- PowerShell 실행 정책이 Restricted인 경우:
  - 설치 프로그램을 실행하려면 PowerShell 실행 정책이 Unrestricted, RemoteSigned 또는 ByPass 중 하나여야 하기 때문에 다음 명령을 실행:

  `> Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`

- 고급 설치를 원하는 경우, 다음 명령으로 설치 프로그램을 다운로드하고 매개변수를 사용하여 수동으로 실행:

  `> irm get.scoop.sh -outfile 'install.ps1'`

- 예를 들어, scoop을 사용자 정의 디렉토리에 설치하고, 사용자 정의 디렉토리에 전역 프로그램을 설치하고, 설치하는 동안 시스템 프록시를 우회하려면 다음과 같이 명령을 수행:

  `> .\install.ps1 -ScoopDir 'D:\Scoop' -ScoopGlobalDir 'D:\GlobalScoopApps' -NoProxy`
  
  - 관리자 권한으로 설치할 때는 `-RunAsAdmin` 옵션을 추가.

- scoop 도움말

  `> scoop help`

- scoop을 사용한 git 설치

  `> scoop install git`

- scoop 설치 프로그램 확인

  `> scoop list`

- scoop 설치 프로그램 및 scoop 업데이트

  `> scoop update`

---

# [Node.js](https://nodejs.org/)
Node.js® is an open-source, cross-platform JavaScript runtime environment.

## 설치
- scoop을 사용한 **Node.js LTS** 버전 설치

  `> scoop install nodejs-lts`

- 설치한 Node.js 버전 확인

  `> node --version`

- **npm** - a JavaScript package manager

  `> npm --version`

- **yarn** - Yarn is a package manager that doubles down as project manager.
  - Corepack은 16.10 버전 이상의 Node.js 설치에 기본적으로 포함되지만 현재 선택사항.
  - 활성화하려면 다음 명령을 실행:

    `> corepack enable`

  - 버전 확인

    `> yarn --version`

- **typesscript**(a language for application scale JavaScript development), **ts-node**(TypeScript execution environment and REPL for node.js, with source map support) 설치하기

  `> npm i -g typescript ts-node`
  
  - 설치된 npm global 패키지 목록 보기

    `> npm ll -g`

  - 버전 확인
    ```
    > tsc -v
    > ts-node -v
    ```

---

# [Visual Studio Code](https://code.visualstudio.com/)

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension 설치
  - 자바스크립트 문법 검사 도구.
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension 설치
  - 코드 스타일 자동 정리 도구.
- Prettier를 기본 포맷터로 설정하기
  - Ctrl+Shift+P: 명령 팔렛트 실행
  - Preferences: Open User Settings 선택
    - formatter 검색 후 Editor: Default Formatter, Editor: Fortmat on Paste, Editor: Format on Save 항목 수정.
  - 또는, Preferences: Open User Settings (JSON) 선택
    - 다음 코드 추가

      ```
      "editor.defaultFormatter": "esbenp.prettier-vscode",
      "[javascript]": {
          "editor.defaultFormatter": "esbenp.prettier-vscode",
          "editor.formatOnSave": true,
          "editor.formatOnPaste": true,
      },
      "[typescript]": {
          "editor.defaultFormatter": "esbenp.prettier-vscode",
          "editor.formatOnSave": true,
          "editor.formatOnPaste": true,
      },
      ```

  - Prettier 스타일 커스터마이징.
    - 프로젝트의 루트 디렉터리(src, public 디렉터리들이 위치한 곳)에 .prettierrc 파일을 생성.

    ```
    {
      "singleQuote": true,
      "semi": true,
      "useTabs": false,
      "tabWidth": 2,
    }
    ```

- VS Code에서 PowerShell 사용하기
  - Ctrl+`
  - Ctrl+Shift+`
  - Menu -> Terminal -> New Terminal
