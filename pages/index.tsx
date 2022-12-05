/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Layout from "../container/layout/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Apple</title>
        <link rel="shortcut icon" href="favicon.ico" />
      </Head>
      <Layout>
        <div className="full__first_container__home">
          <div className="first_image__component"></div>
          <div className="first_text_component">
            <span className="title">Accessibility</span>
            <span className="description">
              At Apple we believe it's a human right
            </span>
          </div>
        </div>
        <div className="full__second_container__home">
          <div className="second_image__component"></div>
          <div className="second_text_component">
            <span className="title">iPhone 14</span>
            <span className="description">Big and bigger.</span>
            <div className="container_input">
              <div>
                <span className="input_bluel">Learn more </span>
                <span className="arrow_bluel">{">"} </span>
              </div>
              <div>
                <span className="input_bluel">Buy </span>
                <span className="arrow_bluel">{">"} </span>
              </div>
            </div>
          </div>
        </div>
        <div className="full__third_container__home">
          <div className="third_image__component"></div>
          <div className="third_text_component">
            <span className="title">Card</span>
            <span className="description">
              Save 5% on Apple products with a new Apple Card through December
              25.
            </span>
            <span className="mini_description">
              Only at Apple. Exclusions and terms apply.
            </span>
            <div className="container_input">
              <div>
                <span className="input_blue">Learn more </span>
                <span className="arrow_blue">{">"} </span>
              </div>
              <div>
                <span className="input_blue">Apply now </span>
                <span className="arrow_blue">{">"} </span>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
