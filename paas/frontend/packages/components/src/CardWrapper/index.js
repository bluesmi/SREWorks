import { RollbackOutlined } from '@ant-design/icons'
import { Divider, Card } from 'antd'
import * as React from 'react'
import style from './index.less'

class CardWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      jobList: [],
      templateList: [],
      policies: [],
      groupList: [],
      loading: false,
      buttonLoading: false,
      paramInLoading: false,
      nowData: {},
      tableNames: [],
      sceneListTree: [],
      list: [],
    }
  }

  render() {
    return (
      <div>
        <Card
          className="composition-card scene-create-wrapper"
          size="small"
          title={
            <div style={{ display: 'flex', justifyContent: 'space-between', height: 48 }}>
              <div style={{ display: 'flex' }}>
                <div style={{ alignItems: 'center', display: 'flex' }}>
                  <div
                    className={style.cardItemTitleIconColor}
                    style={{ width: 4, height: 20 }}
                  ></div>
                  <div>
                    <b style={{ marginLeft: 12, marginRight: 12, fontSize: 14 }}>
                      {this.props.title}
                    </b>
                  </div>
                  {this.props.isBack && (
                    <div>
                      <Divider type="vertical" />
                    </div>
                  )}
                  {this.props.isBack && (
                    <div
                      style={{
                        marginTop: 2,
                        marginRight: 10,
                      }}
                    >
                      <span>
                        <h5>
                          <a onClick={() => this.props.history.goBack()}>
                            <RollbackOutlined /> {this.props.backText || '返回工单列表'}
                          </a>
                        </h5>
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div style={{ alignSelf: 'center' }}>{this.props.extButton}</div>
            </div>
          }
        >
          {this.props.children}
        </Card>
      </div>
    )
  }
}

CardWrapper.propTypes = {}
CardWrapper.defaultProps = {}

export default CardWrapper
