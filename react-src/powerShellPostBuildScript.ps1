yarn build
Copy-Item -Path .\build\* -Destination ..\HMO\web -PassThru -Recurse -Force
