# Dashboard

    - '/'
        -statystyki dzisejszych zamówień (zdalne i lokalne)
        -lista rezerwacji i eventów zaplanowanych na dzisaj DONE

# Logowanie DONE

    - '/login'
        -pola na login i hasło
        -guzik do zalogowania (link do dashboardu)

# Widok dostępności stolików

    - '/tables'
        -wybór daty i godziny
        -tabla z listą rezerwacji oraz wydarzeń
            -każda kolumna będzie jednym stolikiem
            -każdy wiersz blokiem 30 min
            -ma przypominać widok tygodnia w kalendarzu Googla, gdzie w kolumnach zamiast dni są różne stoliki
            -po kliknięciu rezerwacji lub eventu przechodzimy na stronę szczegółów
    - '/tables/booking/:id'
        -zawiera wszystkie info dotyczące rezerwacji
        -umożliwia edycję i zapisanie zmian
    - '/tables/booking/new'
        -analogicznie do powyżej, bez poczatkowych informacji
    - '/tables/events/:id'
         -analogicznie do powyżej, dla eventów
    - 'tables/events/new'
         -analogicznie do powyżej, dla eventów,  bez poczatkowych informacji

# Widok kelnera 

    - '/waiter' DONE
        -tabela
            -w wierszach wyświetla stoliki
            -wkolumnach różne informacje (status, czas od ostatniej aktywności)
            -w ostatniej kolumnie dostępne akcje dla danego stolika
    - '/waiter/order/new' DONE
        -numer stolika(edytowalny)
        -menu produktów
        -opcje wybranego produktu
        -zamówienie (zamówione produkty z opcjami i ceną)
        -kwotę zamówienia
    - '/waiter/order/:id' DONE
        -jak powyższa

# Widok kuchni DONE
    - '/kitchen'
        -wyświetlać listę zamówień w kolejności ich złożenia
        -lista musi zawierać: 
            -numer stolika lub zamówienia zdalnego
            -pełne informacje dotyczące zamówionych dań
        -na liście musi być możliwość oznaczenia zamówienia jako zrealizowane