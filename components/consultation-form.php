<section class="consultation-form">
    <div class="container">
        <div class="form-wrapper">
            <h3>ЗАДАТЬ ВОПРОС ЮРИСТУ</h3>
            <p>Юрист подготовит ответ и перезвонит через 30 минут. Ожидайте!</p>
            
            <form action="process.php" method="POST" class="contact-form" id="consultationForm">
                <div class="form-group">
                    <label>Укажите Ваш номер телефона:</label>
                    <input type="tel" name="phone" class="form-control phone-mask" required placeholder="+7 (___) ___-__-__">
                </div>
                
                <div class="form-group">
                    <label>Опишите Вашу проблему:</label>
                    <textarea name="message" required placeholder="Например, Соседи затопили квартиру, что можно сделать? Как взыскать компенсацию?" class="form-control"></textarea>
                </div>
                
                <div class="form-policy">
                    <input type="checkbox" id="policy" required>
                    <label for="policy">Нажимая кнопку «Отправить», я подтверждаю своё согласие с политикой обработки и передачи персональных данных</label>
                </div>
                
                <button type="submit" class="submit-btn">ОТПРАВИТЬ</button>
            </form>
        </div>
    </div>
</section>