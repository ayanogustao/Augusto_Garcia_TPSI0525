package Java.JAVA_maisdificil;

public class Main {
    public static void main(String[] args) {
        Armazem armazem = new Armazem();

        armazem.adicionarProduto(new ProdutoAlimentar("Arroz", "Alimentar"));
        armazem.adicionarProduto(new ProdutoAlimentar("Massa", "Alimentar"));
        armazem.adicionarProduto(new ProdutoEletronico("Telemóvel", "Eletrónica"));
        armazem.adicionarProduto(new ProdutoEletronico("Portátil", "Eletrónica"));

        armazem.entradaStock("Arroz", 100);
        armazem.entradaStock("Massa", 50);
        armazem.entradaStock("Telemóvel", 30);
        armazem.entradaStock("Portátil", 10);

        try {
            armazem.saidaStock("Arroz", 20);
            armazem.saidaStock("Portátil", 15); // Excede stock
        } catch (StockInsuficienteException e) {
            System.out.println("Erro: " + e.getMessage());
        }

        System.out.println("\nProdutos ordenados por nome:");
        armazem.listarTodosPorNome();

        System.out.println("\nProdutos ordenados por stock:");
        armazem.listarTodosPorQuantidade();

        System.out.println("\nProdutos da categoria 'Alimentar':");
        armazem.listarPorCategoria("Alimentar");
    }
}
