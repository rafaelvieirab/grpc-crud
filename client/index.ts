import express from 'express';
import { createEngine } from 'express-react-views';

import { addressClient, portClient } from '../config/url';
import * as routes from './routes';

const app = express();

app.set('views', `${__dirname}/views`);
app.set('view engine', 'tsx');
app.engine('tsx', createEngine());

app.get('/', routes.getAll);

app.listen(portClient, () => {
	console.info(`Cliente running on http://${addressClient} ...`);
});