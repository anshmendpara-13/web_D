const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    
    // res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Type', 'text/html');
    res.end(`<!DOCTYPE html>
        < html lang = "en" >

        <head>
            <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>height, width, border and background</title>

                        <style>
                            #firstpara {
                                background - color: red;
                            height: 30px;
                            width: 200px;
                            border-width: 4px;
                            /* border-color: yellow; */
                            border-style: solid;
                            /* default black colour */
                            border-radius: 7px;
                            /* all in one line */
                            border: 4px solid yellow;
    
            }

                            #secondpara {
                                background - color: rgb(58, 243, 98);
                            height: 100px;
                            width: 455px;
                            border-top: 2px solid blue;
                            border-right: 3px solid red;
                            border-bottom: 2px solid blue;
                            border-left: 3px solid red;
                            border-top-left-radius: 10px;
                            border-top-right-radius: 10px;
                            border-bottom-left-radius: 10px;
                            border-bottom-right-radius: 10px;
            }

                            #thirdpara {
                                height: 300px;
                            width: 500px;
                            background-image: url('/nature.jpg');
                            border: solid black;
                            /* background-repeat: repeat-y; */
                            /* background-repeat: repeat-x; */
                            background-repeat: no-repeat;
                            background-position: center center;
                /*                  x-axis y-axis */
                /* background-position: 50px 50px; */
                /* x-axis top,bottom,center,... */
                /* y-axis center,left,right,... */
                /* there are many position are posible in this picture */
            }
                        </style>
                    </head>

                    <body>
                        <h3>this is first heading</h3>
                        <p id="firstpara">this is first paragraph</p>

                        <h3>this is second heading</h3>
                        <p id="secondpara">this is second paragraph</p>

                        <h3>this is third heading</h3>
                        <p id="thirdpara">this is third paragraph</p>

                    </body>

                </html>`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});