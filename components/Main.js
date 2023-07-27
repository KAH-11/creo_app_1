import Banner from '@/components/Banner'
import TwoDiv from '@/components/TwoDiv'

const Main = () => {
    return (  
        <main class="content">

            <Banner imagePath="/Good-Pizza.jpg" text="Welcome to our website!"/>
            <TwoDiv />

            {/* Start Orders Form */}
            <form action="" class="orders-form" novalidate>

                <div class="form-title">
                    <h2>Order Now !</h2>
                </div>

                <div class="input-row">
                    <label for="Name">Enter your name:</label>
                    <input class="input" type="text" id="name" name="fullname" required />
                </div>
                <div class="input-row">
                    <label for="Name">Enter your address:</label>
                    <input class="input" type="text" id="address" name="address" required />
                </div>
                <div class="input-row">
                    <label for="Name">Enter your order:</label>
                    <input class="input" type="text" id="order" name="order" required />
                </div>
                <div class="submit-row">
                    <input class="order-btn" type="submit" value="Send Order" />
                </div>
                
            </form>
            {/* End Orders Form */}

        </main>
    );
}
export default Main;