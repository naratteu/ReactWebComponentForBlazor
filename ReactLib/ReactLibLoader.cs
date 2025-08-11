using Microsoft.JSInterop;
namespace ReactLib;
public class ReactLibLoader(IJSRuntime js)
{ Task _ = js.InvokeVoidAsync("import", "./_content/ReactLib/wc-loader.js").AsTask(); }