import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';

const SharedLayout = () => {
    return(<div>
          <header>
        <nav>
          <Link to='/' end>Home</Link>
          <Link to='/movies'>Movies</Link>
        </nav>
      </header>

<Suspense fallback={<div>Loading page...</div>}>
<Outlet />
</Suspense>
    </div>
      
    )
}

export default SharedLayout;