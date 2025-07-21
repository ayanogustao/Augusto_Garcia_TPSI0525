package Java.JAVA_maisdificil;

public interface Movimentavel {
    void entrada(int quantidade);
    void saida(int quantidade) throws StockInsuficienteException;
    String resumo();
}
