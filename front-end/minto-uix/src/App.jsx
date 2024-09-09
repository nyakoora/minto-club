const App = () => {
  return (
    <>
      <div class="container">
        <aside>
            <div class="top">
                <div class="logo">
                    <img src="/src/assets/images/logo.png" alt="Logo" />
                    <h2>MINTO<span class="danger">CLUB</span></h2>
                </div>
                <div class="close" id="close-btn">
                    <span class="material-symbols-outlined">
                        close
                        </span>
                </div>
            </div>
            <div class="sidebar">
                <a href="#">
                    <span class="material-symbols-outlined">dashboard</span>
                    <h3>Dashboard</h3>
                </a>
                <a href="#" class="active">
                    <span class="material-symbols-outlined">person</span>
                    <h3>Customers</h3>
                </a>
                <a href="#">
                    <span class="material-symbols-outlined">receipt_long</span>
                    <h3>Orders</h3>
                </a>
                <a href="#">
                    <span class="material-symbols-outlined">insights</span>
                    <h3>Analytics</h3>
                </a>
                <a href="#">
                    <span class="material-symbols-outlined">mail_outline</span>
                    <h3>Messages</h3>
                    <span class="message-count">26</span>
                </a>
                <a href="#">
                    <span class="material-symbols-outlined">inventory</span>
                    <h3>Products</h3>
                </a>
                <a href="#">
                    <span class="material-symbols-outlined">report_gmailerrorred</span>
                    <h3>Reports</h3>
                </a>
                <a href="#">
                    <span class="material-symbols-outlined">
                        settings
                        </span>
                    <h3>Settings</h3>
                </a>
                <a href="#">
                    <span class="material-symbols-outlined">
                        add
                        </span>
                    <h3>Add Product</h3>
                </a>
                <a href="#">
                    <span class="material-symbols-outlined">
                        logout
                        </span>
                    <h3>Logout</h3>
                </a>
            </div>
        </aside>
      </div>
    </>
  )
}

export default App