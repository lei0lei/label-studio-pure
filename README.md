小体积版label studio,只用于python部署

本地构建运行如下命令:
```
embedded_python\python.exe get-pip.py
embedded_python\python.exe -m pip install setuptools wheel --target embedded_python\Lib\site-packages
```

```
embedded_python\python.exe -m pip install -r requirements.txt --target embedded_python\Lib\site-packages
```
```
cd web
npm install --legacy-peer-deps
```
```
npm install -g yarn
```
```
npm run build
```

本地运行:
```
embedded_python\python.exe label_studio/manage.py migrate
```

```
embedded_python\python.exe label_studio/manage.py collectstatic
```


```
embedded_python\python.exe label_studio/manage.py runserver
```