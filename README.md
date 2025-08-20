# ReactWebComponentForBlazor

리액트를 블레이저에서 컴포넌트 단위로 활용하기 위한 프로젝트 구성 템플릿 입니다.

## How to test

```bash
git clone https://github.com/naratteu/ReactWebComponentForBlazor
cd ReactWebComponentForBlazor

dotnet new blazor -o BlazorApp
cd BlazorApp
dotnet add reference ../ReactLib
```

생성된 프로젝트의 `Program.cs` 에 아래 의존성을 추가합니다.

```cs
builder.Services.AddScoped<ReactLib.ReactLibLoader>();
```

```bash
dotnet build # 한번 해줘야댐
dotnet watch # href /Test
```

실행된 블레이저 웹앱의 `/Test`경로에 접속하여 `WebComponent`로 정적출력 된 리액트컴포넌트와 블레이저간의 양방향 바인딩효과를 확인할 수 있습니다.

https://github.com/user-attachments/assets/b00622d0-c6b9-472d-b873-5fad8e50f65b

## Todo

- `onchange` 등의 알려진 이벤트 핸들러 뿐만이 아닌 커스텀 이벤트 핸들러로도 바인딩이 가능해야 합니다.
    - https://github.com/dotnet/aspnetcore/issues/27651

## Potential

- `react` 뿐만 아니라 `stencil`, `lit` 등 모든 `WebComponent` 지원 생태계로 블레이저를 확장.
- `.jsx` 말고 `.tsx`, `.mdx` 도 넣어보기
- 블레이저 참조용 리액트 프로젝트에 반복적으로 작성될 코드에 대한 소스생성기 혹은 Sdk 까지 구성할수 있지 않을지?
    - https://www.npmjs.com/package/vite-plugin-codegen

## Thanks

- https://github.com/bitovi/react-to-web-component

## See also

- https://blog.aliencube.org/ko/2020/06/03/adding-react-components-to-blazor-webassembly-app
- ~~https://www.perplexity.ai/sidecar/search/blazoryi-two-way-bindinggwa-re-P92NWn8lRiiI_rXdCGdpGA~~
    - 위 출력된 내용이 가능한것이라면, `astro` 등 다른프레임워크의 하위로 `blazor`컴포넌트가 사용될수도 있을거 같음.
