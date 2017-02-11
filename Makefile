build:
	docker build -f Dockerfile.phpfpm -t wambo.one-phpfpm:latest .
	docker build -f Dockerfile.webserver -t wambo.one-webserver:latest .
