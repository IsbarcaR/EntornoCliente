$(document).ready(function() {
    function filterProducts() {
        const searchTerm = $('#searchInput').val().toLowerCase();
        const selectedCategory = $('#categoryFilter').val();

        $('.product').each(function() {
            const $product = $(this);
            const productName = $product.find('h3').text().toLowerCase();
            const productCategory = $product.data('category');
            
            const matchesSearch = productName.includes(searchTerm);
            const matchesCategory = selectedCategory === '' || productCategory === selectedCategory;
            
            if (matchesSearch && matchesCategory) {
                if ($product.is(':hidden')) {
                    $product.fadeIn(300);
                }
            } else {
                if ($product.is(':visible')) {
                    $product.fadeOut(300);
                }
            }
        });
    }

    $('#searchInput').on('input', filterProducts);
    $('#categoryFilter').on('change', filterProducts);

    filterProducts();
});