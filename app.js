const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const fs = require("fs")
const YAML = require('yaml')

const filePath='./keycloak.openapi.yaml';

const file  = fs.readFileSync(filePath, 'utf8')
const swaggerDocument = YAML.parse(file)

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(3003, () => {
    console.log('Server is running on http://localhost:3003');
});
