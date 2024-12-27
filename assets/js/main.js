// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Add event listener for the sign-up button
    const signUpButton = document.getElementById('sign-up');
    if (signUpButton) {
        signUpButton.addEventListener('click', function() {
            window.location.href = 'userType.html'; // Redirect to the userType.html page
        });
    }

    // Add event listener for the customer button
    const employeeButton = document.getElementById('employee');
    if (employeeButton) {
        employeeButton.addEventListener('click', function() {
            window.location.href = 'employee-sign-up.html'; // Redirect to the employee-sign-up.html page
        });
    }

    // Add event listener for the customer button
    const staffButton = document.getElementById('staff');
    if (staffButton) {
        staffButton.addEventListener('click', function() {
            window.location.href = 'staff-sign-up.html'; // Redirect to the staff-sign-up.html page
        });
    }

    // Add event listener for the customer button
    const supplierButton = document.getElementById('supplier');
    if (supplierButton) {
        supplierButton.addEventListener('click', function() {
            window.location.href = 'supplier-sign-up.html'; // Redirect to the supplier-sign-up.html page
        });
    }

    // Add event listener for the customer button
    const customerButton = document.getElementById('customer');
    if (customerButton) {
        customerButton.addEventListener('click', function() {
            window.location.href = 'customer-sign-up.html'; // Redirect to the customer-sign-up.html page
        });
    }
});
