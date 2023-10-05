# start by pulling the python image
FROM python:latest

# copy the requirements file into the image
COPY ./requirements.txt /app2/requirements.txt

# switch working directory
WORKDIR /app2

# install the dependencies and packages in the requirements file
RUN pip install -r requirements.txt

# copy every content from the local file to the image
COPY . /app2

# configure the container to run in an executed manner
ENTRYPOINT [ "python" ]

CMD ["demo.py" ]