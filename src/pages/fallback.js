import { Fragment } from "react";
import { Head, Error } from "../components";

function Fallback() {
  return (
    <Fragment>
      <Head title="İnternetə Qoşulun" />
      <section className="splash-screen">
        <Error
          title="İnternetə qoşula bilmirəm :("
          image="/images/network-error.png"
        />
      </section>
      <style jsx>{`
        .splash-screen {
          display: grid;
          place-items: center;
          height: 100vh;
        }
      `}</style>
    </Fragment>
  );
}

export default Fallback;
