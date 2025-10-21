package Java.JAVA_maisdificil;

import java.util.*;

public class Armazem {
    private HashMap<String, List<Produto>> produtosPorCategoria;

    public Armazem() {
        produtosPorCategoria = new HashMap<>();
    }

    public void adicionarProduto(Produto p) {
        produtosPorCategoria.putIfAbsent(p.getCategoria(), new ArrayList<>());
        produtosPorCategoria.get(p.getCategoria()).add(p);
    }

    private Produto encontrarProdutoPorNome(String nome) {
        for (List<Produto> lista : produtosPorCategoria.values()) {
            for (Produto p : lista) {
                if (p.getNome().equalsIgnoreCase(nome)) {
                    return p;
                }
            }
        }
        return null;
    }

    public void entradaStock(String nome, int quantidade) {
        Produto p = encontrarProdutoPorNome(nome);
        if (p != null) {
            p.entrada(quantidade);
        }
    }

    public void saidaStock(String nome, int quantidade) throws StockInsuficienteException {
        Produto p = encontrarProdutoPorNome(nome);
        if (p != null) {
            p.saida(quantidade);
        }
    }

    public void listarTodosPorNome() {
        List<Produto> todos = new ArrayList<>();
        for (List<Produto> lista : produtosPorCategoria.values()) {
            todos.addAll(lista);
        }
        Collections.sort(todos);
        for (Produto p : todos) {
            System.out.println(p.resumo());
        }
    }

    public void listarTodosPorQuantidade() {
        List<Produto> todos = new ArrayList<>();
        for (List<Produto> lista : produtosPorCategoria.values()) {
            todos.addAll(lista);
        }
        todos.sort((p1, p2) -> Integer.compare(p2.getStock(), p1.getStock()));
        for (Produto p : todos) {
            System.out.println(p.resumo());
        }
    }

    public void listarPorCategoria(String categoria) {
        List<Produto> lista = produtosPorCategoria.get(categoria);
        if (lista != null) {
            for (Produto p : lista) {
                System.out.println(p.resumo());
            }
        }
    }
}
