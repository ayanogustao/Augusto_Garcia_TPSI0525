package Java.JAVA_maisdificil;

public abstract class Produto implements Movimentavel, Comparable<Produto> {
    private String nome;
    private String categoria;
    private int stock;

    public Produto(String nome, String categoria) {
        this.nome = nome;
        this.categoria = categoria;
        this.stock = 0;
    }

    public String getNome() {
        return nome;
    }

    public String getCategoria() {
        return categoria;
    }

    public int getStock() {
        return stock;
    }

    @Override
    public void entrada(int quantidade) {
        if (quantidade > 0) {
            stock += quantidade;
            System.out.println("Entrada de " + quantidade + " unidades no produto " + nome + ".");
        }
    }

    @Override
    public void saida(int quantidade) throws StockInsuficienteException {
        if (quantidade > stock) {
            throw new StockInsuficienteException("Stock insuficiente para o produto: " + nome);
        }
        stock -= quantidade;
        System.out.println("Saída de " + quantidade + " unidades do produto " + nome + ".");
    }

    @Override
    public String resumo() {
        return nome + " | " + categoria + " | Stock: " + stock;
    }

    @Override
    public int compareTo(Produto outro) {
        return this.nome.compareToIgnoreCase(outro.nome);
    }
}
