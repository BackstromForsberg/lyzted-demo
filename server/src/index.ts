import express, {
    type Express,
    type Request,
    type Response
} from 'express';
import cors from 'cors'
import listingsRouter from './routes/listingsRouter'

const app: Express = express();
const PORT = process.env.PORT || 3000;

// Built-in middleware to parse JSON request bodies
app.use(express.json());
app.use(cors())
app.use('/listings', listingsRouter)

app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Hello Lyzted Demo.' });
});

// Example Parameterized API Route with explicit typing
app.get('/api/users/:id', (req: Request<{ id: string }>, res: Response) => {
    const userId = req.params.id;
    res.json({ success: true, id: userId });
});

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});