import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        // 从state中获取组件需要的状态
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // 定义组件的事件处理器，例如dispatch一个action
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(YourComponent);
