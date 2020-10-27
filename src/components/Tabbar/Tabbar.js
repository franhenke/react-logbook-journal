import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'

import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg'
import { ReactComponent as StarIcon } from '../../assets/icons/star.svg'
import { ReactComponent as AddIcon } from '../../assets/icons/plus-square.svg'
import { ReactComponent as BookIcon } from '../../assets/icons/book-open.svg'
import { ReactComponent as MapIcon } from '../../assets/icons/map.svg'

const Tabbar = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className="tabbar">
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        aria-label="tabbar"
      >
        <Tab
          icon={<HomeIcon />}
          label="home"
          component={Link}
          to={ROUTES.HOME}
        />
        <Tab
          icon={<BookIcon />}
          label="journals"
          component={Link}
          to={ROUTES.JOURNALS}
        />
        <Tab
          icon={<AddIcon />}
          label=""
          component={Link}
          to={ROUTES.JOURNALFORM}
        />
        <Tab
          icon={<StarIcon />}
          label="favorites"
          component={Link}
          to={ROUTES.JOURNALFORM}
        />
        <Tab
          icon={<MapIcon />}
          label="explore"
          component={Link}
          to={ROUTES.JOURNALFORM}
        />
      </Tabs>
    </div>
  )
}

export default Tabbar
