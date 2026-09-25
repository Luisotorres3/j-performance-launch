import { Landmark } from "lucide-react";
import bizum from "@/assets/payments/bizum.png";
import revolut from "@/assets/payments/revolut.svg";
import paypal from "@/assets/payments/paypal.svg";

export default function PaymentBanner() {
  return (
    <aside className="payment-banner" aria-label="Métodos de pago">
      <p>
        Primero nos conocemos.<span>El pago, después de la entrevista.</span>
      </p>
      <ul className="payment-logos">
        <li>
          <img
            className="payment-wordmark"
            src={bizum}
            alt="Bizum"
            width="120"
            height="36"
            loading="lazy"
          />
        </li>
        <li>
          <img
            className="payment-wordmark"
            src={revolut}
            alt="Revolut"
            width="120"
            height="36"
            loading="lazy"
          />
        </li>
        <li>
          <img
            className="payment-symbol"
            src={paypal}
            alt=""
            width="32"
            height="32"
            loading="lazy"
          />
          <span>PayPal</span>
        </li>
        <li className="payment-bank">
          <Landmark size={27} aria-hidden="true" />
          <span>
            Transferencia<small>bancaria</small>
          </span>
        </li>
      </ul>
    </aside>
  );
}
