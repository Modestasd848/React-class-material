import './App.css';

function App() {
  return (
    <div>
      <header>
        <div className="logo-header">
          <img
            src="https://siteglobal.com/themes/custom/site_global/build/images/logos/logo.png"
            alt="logo"
          />
        </div>

        <nav>
          <a href="#">Home</a>
          <a href="#">Product</a>
          <a href="#">Company</a>
          <a href="#">Contact</a>
        </nav>
      </header>
      <main>
        <div>
          <img src="https://reactnative.dev/img/logo-og.png" alt="react" />
        </div>
        <section className="flex-box">
          <div className="flex-item">
            <h2>About</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestias corporis expedita exercitationem asperiores id ipsa
              sequi, recusandae natus facilis nisi aliquid distinctio suscipit
              repellat est quos ab minima saepe. Aut.
            </p>
          </div>
          <div className="flex-item">
            <h2>Company</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestias corporis expedita exercitationem asperiores id ipsa
              sequi, recusandae natus facilis nisi aliquid distinctio suscipit
              repellat est quos ab minima saepe. Aut.
            </p>
          </div>
          <div className="flex-item">
            <h2>Services</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestias corporis expedita exercitationem asperiores id ipsa
              sequi, recusandae natus facilis nisi aliquid distinctio suscipit
              repellat est quos ab minima saepe. Aut.
            </p>
          </div>
        </section>
        <div className="content">
          <div>
            <h1>Content</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
              enim numquam delectus harum voluptatum! Enim, illo? Ipsam ullam
              dolorem dolor, ipsa perspiciatis vitae illo consequuntur debitis
              error voluptatem modi voluptatum maiores tenetur nihil nemo
              mollitia harum ducimus ipsum quis possimus qui dicta.
            </p>
            <h2>Sub Header</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
              suscipit tempora? Repellendus voluptates vitae quia. Placeat
              tempora illo amet nam. Doloribus tenetur delectus distinctio sint,
              sapiente inventore necessitatibus ad laborum atque ex veniam in et
              qui vitae temporibus accusamus natus illum fugit ut architecto
              magni expedita quis ipsa esse. Modi rerum officiis natus deleniti
              assumenda, aperiam quae praesentium voluptas laborum ea culpa
              neque, consectetur odit nemo animi sed quisquam doloribus,
            </p>
          </div>
          <div>
            <h1>Navigation</h1>
            <nav className="content-nav">
              <a href="#">Home</a>
              <a href="#">Product</a>
              <a href="#">Company</a>
              <a href="#">Contact</a>
            </nav>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
