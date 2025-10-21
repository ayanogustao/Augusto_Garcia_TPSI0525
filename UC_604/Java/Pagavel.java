package Java;

public interface Pagavel {
    void pagar(double valor) throws PagamentoInvalidoException;
}
