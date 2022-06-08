function navbar() {
	return `<div id="recipes">
    <a href="index.html">Apna Food App</a>
    <a href="recipeOfDay.html">Recipe of the day</a>
    <a href="recipes.html">Random Recipe</a>
</div>
<div id="search_bar">
    <input
        type="text"
        name="search"
        id="search"
        placeholder="Search recipe by name.."
    />
    <i class="fas fa-search" id="search-icon"></i>
</div>
<div id="log-sign">
    <a href="login.html" id="login">Login</a>
    <a href="signup.html">SignUp</a>
</div>`;
}

export default navbar;
