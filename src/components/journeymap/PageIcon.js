import React from 'react';
import './pageeicon.css';
import StepCompletedCheckbox from './StepCompletedCheckbox'
let cn = require('classnames');

class PageIcon extends React.Component {
    
    constructor(props) {
        super(props)
        let url = process.env.PUBLIC_URL;
        this.imageByState = {
            'new' : url + '/icons/journey_map_event_default.svg',
            'draft': url + '/icons/journey_map_form_draft.svg',
            'completed' : url + '/icons/journey_map_form_approved.svg',
            'rejected' : url + '/icons/journey_map_form_rejected.svg',
            'pending': url + '/icons/journey_map_form_pending.svg',
            'na': url + '/icons/journey_map_form_opt-out.svg'
        }
        
    }

    render() {
        let stepTitle, stepTitleOptional = null;
        let active = !!this.props.active;
        let imgSrc = this.imageByState[this.props.status];
        let checkboxStyle = {position: 'relative', marginTop: 0, left: '-25%'}
        
        if (this.props.twoPages) {
            imgSrc =  process.env.PUBLIC_URL + "/icons/journey_map_event_multi-page.svg"
        }
        let top = this.props.twoPages ? '11px' : '5px';
        
        if (this.props.stepTitleOptional) {
            stepTitleOptional = <span className={"step-title-optional"}>{this.props.stepTitleOptional}</span>;
        }
        if (this.props.stepTitle) {
            stepTitle = (
                <div>
                    <span className={cn({"step-title": active }, {"step-title-optional" : !active})}>
                        {this.props.stepTitle}
                    </span>
                    <br/>
                    {stepTitleOptional}
                </div>
            );
        }
        
        if (this.props.twoPages) {
             return (
                 <div className={cn("journey-box", {"inactive": !active})} style={this.props.style}>
                     <StepCompletedCheckbox 
                         style={checkboxStyle}
                         onChange={this.completed.bind(this)}
                         show={active}
                         disabled={!this.props.ready}
                         checked={this.props.status === 'completed'}
                     />
                    <span style={{position: 'relative', top: top, left: active ? '-10%' : '9%', zIndex: '9'}}>{this.props.order}</span>
                    <div className={"file-main"} >
                            <img src={imgSrc} 
                                 className={cn({"journey-icon": active}, {"inactive": !active})} 
                                 onClick={this.props.action}
                                 style={{height:'93px'}}
                                 alt={"Page Icon for " + stepTitle}
                            />
                            <div className={"file-corner-r"} style={{top: '-15px'}}/>
                    </div>
                    <div className={cn("step-title-container", this.props.stepTitleClass)} onClick={this.props.action}>
                        {stepTitle}
                    </div>
                 </div>
             );
        } else {
            return (
                <div className={cn("journey-box", {"inactive": !active})} style={this.props.style} >
                    <StepCompletedCheckbox
                        style={checkboxStyle}
                        onChange={this.completed.bind(this)}
                        show={active}
                        disabled={!this.props.ready}
                        checked={this.props.status === 'completed'}
                    />
                    <span style={{position: 'relative', top: '5px', left: '-10%', zIndex: '9'}}>{this.props.order}</span>
                    <div className={"file-main"} >
                        <img 
                            src={imgSrc} 
                            className={cn({"journey-icon": active}, {"inactive": !active})} 
                            onClick={this.props.action}
                            alt={"Page Icon for " + stepTitle}
                        />
                        <div className={"file-corner-r"} />
                    </div>
                    <div className={cn("step-title-container", this.props.stepTitleClass)} onClick={this.props.action}>
                        {stepTitle}
                    </div>
                </div>
            )
        }
    }
    
    completed(e) {
        this.props.completed(this.props.order, e.target.checked)
    }
    

} export default PageIcon;