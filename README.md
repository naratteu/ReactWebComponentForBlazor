# ReactWebComponentForBlazor

## How to run

```bash
dotnet new blazor -o BlazorApp
cd BlazorApp
dotnet add reference ../ReactLib
```

```cs
builder.Services.AddScoped<ReactLib.ReactLibLoader>();
```

```bash
dotnet build # 한번 해줘야댐
dotnet watch # href /Test
```