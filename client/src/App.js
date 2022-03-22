import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import GlobalStyles from "./styles/global";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage";
import ProductsPage from "./pages/products-page/products-page";
import SignInPage from "./pages/signin-page/signin";
import RegisterPage from "./pages/register-page/register";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  return (
    <div>
      <Header></Header>
      <GlobalStyles />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/products/*" element={<ProductsPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            this.props.currentUser ? (
              <Redirect to="/" />
            ) : (
              <SignInAndSignUpPage />
            )
          }
        /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
