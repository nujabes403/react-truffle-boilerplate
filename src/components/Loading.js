import React from 'react'
import classNames from 'classnames'

import './Loading.scss'

type Props = {
  wholePage: boolean,
}

const Loading = ({
  wholePage,
}: Props) => (
  <div className={classNames('Loading', {
      'Loading--wholePage': wholePage,
    })}
  />
)

export default Loading
