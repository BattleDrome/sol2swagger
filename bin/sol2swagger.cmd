@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\node_modules\sol2swagger\bin\sol2swagger" %*
) ELSE (
  node  "%~dp0\node_modules\sol2swagger\bin\sol2swagger" %*
)