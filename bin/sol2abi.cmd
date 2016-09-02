@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\node_modules\sol2swagger\bin\sol2abi" %*
) ELSE (
  node  "%~dp0\node_modules\sol2swagger\bin\sol2abi" %*
)