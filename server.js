import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express();
app.use(express.json());
app.use(cors());

const users = [];

// O método POST é utilizado criar novos usuários dentro do meu servidor.
app.post('/usuarios', async (req, res) => {
    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    });

    res.status(201).json(req.body);
});

// Requisições utilizando o método GET devem retornar apenas dados.
app.get('/usuarios', async (req, res) => {
    let users = [];

    // Aqui estamos fazendo um filtro de busca pelo nome, email ou idade.
    if(req.query) {
        users = await prisma.user.findMany({ 
            where: {
                name: req.query.name,
                email: req.query.email,
                age: req.query.age
            }
        });
    } else {
        users = await prisma.user.findMany();
    }

    res.status(200).json(users);
});

// O método PATCH é utilizado para aplicar modificações em vários ou em um único usuário do BD.
app.put('/usuarios/:id', async (req, res) => {
    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    });

    res.status(201).json(req.body);
});

// O método DELETE remove um usuáiro ou vários do BD.
app.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    });

    res.status(200).json({message: "Usuário Deletado com Sucesso!"});
});
 
app.listen(3000);