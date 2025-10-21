package Java;

public class Main {
    public static void main(String[] args) {
        Fatura f = new Fatura(101, "Fatura da Água", 45.0);

        // Teste 1: valor inferior
        try {
            f.pagar(30.0);
        } catch (PagamentoInvalidoException e) {
            System.out.println("Erro 1: " + e.getMessage());
        }

        // Teste 2: valor superior
        try {
            f.pagar(50.0);
        } catch (PagamentoInvalidoException e) {
            System.out.println("Erro 2: " + e.getMessage());
        }

        // Teste 3: valor correto
        try {
            f.pagar(45.0);
        } catch (PagamentoInvalidoException e) {
            System.out.println("Erro 3: " + e.getMessage());
        }

        // Teste 4: tentar pagar novamente
        try {
            f.pagar(45.0);
        } catch (PagamentoInvalidoException e) {
            System.out.println("Erro 4: " + e.getMessage());
        }
    }
}
