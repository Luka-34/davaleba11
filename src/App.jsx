// App.js
import React from 'react';
import Books from '../src/components/bookList'; // Books კომპონენტის იმპორტი

// App კომპონენტი წარმოადგენს მთავარ კომპონენტს
const App = () => {
    return (
        <div>
            {/* Books კომპონენტის რენდერინგი */}
            <Books />
        </div>
    );
}

export default App;