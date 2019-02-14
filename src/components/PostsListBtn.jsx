import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class PostsListBtn extends Component {
    state = {
        page: parseInt(this.props.match.params.id, 10)
    }

    changeList = id => {
        const { numberOfPages} = this.props;

        if(id >= 1 && id <= numberOfPages) {
            this.setState({
                page: id
            }, () => {
                this.props.history.push(`/page/${id}`);
            });
        }
    }

    createButton(attr, name, _if, _else) {
        return _if ? {
                btn: <button key={attr} onClick={() => this.changeList(attr)}>{name}</button>,
                bool: true
            } : _else ? {
                btn: <button key={attr}>...</button>,
                bool: false
            } : {};
    }

    render() {
        const { numberOfPages } = this.props;
        const { page } = this.state;
        const btns = [<button key="prev" onClick={() => this.changeList(page - 1)}>Prev</button>];

        for(let i = 1, obj = {}; i <= numberOfPages; i++) {
            obj = 
                (page <= 2 || page >= numberOfPages - 1) ? this.createButton(i, i, (i <= 3  || i >=  numberOfPages - 2), obj.bool) :
                (page === 3)                             ? this.createButton(i, i, (i <= 4  || i >=  numberOfPages - 1), obj.bool) :
                (page === numberOfPages - 2)             ? this.createButton(i, i, (i <= 2  || i >=  numberOfPages - 3), obj.bool) :
                                                           this.createButton(i, i, (i === 1 || i === numberOfPages || (i >= page - 1 && i <= page + 1)), obj.bool);
            btns.push(obj.btn);
        }
        btns.push(<button key="next" onClick={() => this.changeList(page + 1)}>Next</button>);

        return (
            <div>
                {btns}
            </div>
        );
    }
}

export default withRouter(PostsListBtn);