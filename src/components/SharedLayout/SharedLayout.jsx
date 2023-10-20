import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import style from 'components/SharedLayout/SharedLayout.module.css'

const SharedLayout = () => {
    return(<div>
          <header >
        <nav className={style['header']} >
          
          <Link className={style['header-item']}
           to='/' end>HOME</Link>
          <Link className={style['header-item']} 
          to='/movies'>MOVIES</Link>
          
        </nav>
      </header>

<Suspense fallback={<div>Loading page...</div>}>
<Outlet />
</Suspense>
    </div>
      
    )
}

export default SharedLayout;