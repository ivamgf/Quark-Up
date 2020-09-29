// Headers file

// Imports

// Imports Modules

// Imports components

// Variables

// Constant
const head = `<nav class="navbar navbar-expand-md bg-primary navbar-dark shadow p-4 mb-4 bg-primary">
            <!-- Brand -->
            <a class="navbar-brand" href="#">Konektron - API Quark Up</a>
            <!-- Toggler/collapsibe Button -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
            </button>
            <!-- Navbar links -->
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link" href="/"><i class="fas fa-home"></i> Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/doc"><i class="fas fa-book"></i> Documentation</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/cont"><i class="fas fa-envelope"></i> Contacts</a>
                </li>                
            </ul>
            </div>
            </nav>`;
const navbar = { 
    nav: head
};

// Functions

// Exports
module.exports.navbar = navbar;