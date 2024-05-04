import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, Input, NgModule, Output, ViewEncapsulation } from '@angular/core';
import { PrimeTemplate, SharedModule } from 'primeng/api';
import { UniqueComponentId } from 'primeng/utils';
import { animate, state, style, transition, trigger } from '@angular/animations';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class StepperHeader {
    id;
    template;
    stepperPanel;
    index;
    disabled;
    active;
    highlighted;
    getStepProp;
    ariaControls;
    onClick = new EventEmitter();
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.1", ngImport: i0, type: StepperHeader, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.1", type: StepperHeader, selector: "p-stepperHeader", inputs: { id: "id", template: "template", stepperPanel: "stepperPanel", index: "index", disabled: "disabled", active: "active", highlighted: "highlighted", getStepProp: "getStepProp", ariaControls: "ariaControls" }, outputs: { onClick: "onClick" }, host: { classAttribute: "p-element" }, ngImport: i0, template: `
        <ng-container *ngIf="template; else buttonRef">
            <ng-container
                *ngTemplateOutlet="
                    template;
                    context: {
                        index: index,
                        active: active,
                        highlighted: highlighted,
                        class: 'p-stepper-action',
                        headerClass: 'p-stepper-action',
                        numberClass: 'p-stepper-number',
                        titleClass: 'p-stepper-title',
                        onClick: onClick
                    }
                "
            ></ng-container>
        </ng-container>
        <ng-template #buttonRef>
            <p-button [id]="id" class="p-stepper-action" role="tab" [tabindex]="disabled ? -1 : undefined" [aria-controls]="ariaControls" (click)="onClick.emit($event, index)">
                <span class="p-stepper-number">{{ index + 1 }}</span>
                <span class="p-stepper-title">{{ getStepProp }}</span>
            </p-button>
        </ng-template>
    `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.1", ngImport: i0, type: StepperHeader, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-stepperHeader',
                    template: `
        <ng-container *ngIf="template; else buttonRef">
            <ng-container
                *ngTemplateOutlet="
                    template;
                    context: {
                        index: index,
                        active: active,
                        highlighted: highlighted,
                        class: 'p-stepper-action',
                        headerClass: 'p-stepper-action',
                        numberClass: 'p-stepper-number',
                        titleClass: 'p-stepper-title',
                        onClick: onClick
                    }
                "
            ></ng-container>
        </ng-container>
        <ng-template #buttonRef>
            <p-button [id]="id" class="p-stepper-action" role="tab" [tabindex]="disabled ? -1 : undefined" [aria-controls]="ariaControls" (click)="onClick.emit($event, index)">
                <span class="p-stepper-number">{{ index + 1 }}</span>
                <span class="p-stepper-title">{{ getStepProp }}</span>
            </p-button>
        </ng-template>
    `,
                    host: {
                        class: 'p-element'
                    }
                }]
        }], propDecorators: { id: [{
                type: Input
            }], template: [{
                type: Input
            }], stepperPanel: [{
                type: Input
            }], index: [{
                type: Input
            }], disabled: [{
                type: Input
            }], active: [{
                type: Input
            }], highlighted: [{
                type: Input
            }], getStepProp: [{
                type: Input
            }], ariaControls: [{
                type: Input
            }], onClick: [{
                type: Output
            }] } });
export class StepperSeparator {
    template;
    separatorClass;
    stepperPanel;
    index;
    active;
    highlighted;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.1", ngImport: i0, type: StepperSeparator, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.1", type: StepperSeparator, selector: "p-stepperSeparator", inputs: { template: "template", separatorClass: "separatorClass", stepperPanel: "stepperPanel", index: "index", active: "active", highlighted: "highlighted" }, host: { classAttribute: "p-stepper-separator" }, ngImport: i0, template: `
        <ng-container *ngIf="template; else span">
            <ng-container *ngTemplateOutlet="template; context: { index: index, active: active, highlighted: highlighted, class: separatorClass }"></ng-container>
        </ng-container>
        <ng-template #span>
            <span [class]="separatorClass" aria-hidden="true"></span>
        </ng-template>
    `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.1", ngImport: i0, type: StepperSeparator, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-stepperSeparator',
                    template: `
        <ng-container *ngIf="template; else span">
            <ng-container *ngTemplateOutlet="template; context: { index: index, active: active, highlighted: highlighted, class: separatorClass }"></ng-container>
        </ng-container>
        <ng-template #span>
            <span [class]="separatorClass" aria-hidden="true"></span>
        </ng-template>
    `,
                    host: {
                        class: 'p-stepper-separator'
                    }
                }]
        }], propDecorators: { template: [{
                type: Input
            }], separatorClass: [{
                type: Input
            }], stepperPanel: [{
                type: Input
            }], index: [{
                type: Input
            }], active: [{
                type: Input
            }], highlighted: [{
                type: Input
            }] } });
export class StepperContent {
    id;
    orientation;
    template;
    ariaLabelledby;
    stepperPanel;
    index;
    active;
    highlighted;
    onClick = new EventEmitter();
    prevCallback = new EventEmitter();
    nextCallback = new EventEmitter();
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.1", ngImport: i0, type: StepperContent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.1", type: StepperContent, selector: "p-stepperContent", inputs: { id: "id", orientation: "orientation", template: "template", ariaLabelledby: "ariaLabelledby", stepperPanel: "stepperPanel", index: "index", active: "active", highlighted: "highlighted" }, outputs: { onClick: "onClick", prevCallback: "prevCallback", nextCallback: "nextCallback" }, host: { properties: { "class.p-stepper-content": "true", "class.p-element": "true", "class.p-toggleable-content": "orientation === 'vertical'" } }, ngImport: i0, template: ` <div [id]="id" role="tabpanel" data-pc-name="stepperpanel" [attr.data-pc-index]="index" [attr.data-p-active]="active" [attr.aria-labelledby]="ariaLabelledby">
        <ng-container *ngIf="template">
            <ng-container *ngTemplateOutlet="template; context: { index: index, active: active, highlighted: highlighted, onClick: onClick, prevCallback: prevCallback, nextCallback: nextCallback }"></ng-container>
        </ng-container>
        <ng-template *ngIf="!template">
            <ng-container *ngIf="stepperPanel">
                <ng-container *ngTemplateOutlet="stepperPanel"></ng-container>
            </ng-container>
        </ng-template>
    </div>`, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.1", ngImport: i0, type: StepperContent, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-stepperContent',
                    template: ` <div [id]="id" role="tabpanel" data-pc-name="stepperpanel" [attr.data-pc-index]="index" [attr.data-p-active]="active" [attr.aria-labelledby]="ariaLabelledby">
        <ng-container *ngIf="template">
            <ng-container *ngTemplateOutlet="template; context: { index: index, active: active, highlighted: highlighted, onClick: onClick, prevCallback: prevCallback, nextCallback: nextCallback }"></ng-container>
        </ng-container>
        <ng-template *ngIf="!template">
            <ng-container *ngIf="stepperPanel">
                <ng-container *ngTemplateOutlet="stepperPanel"></ng-container>
            </ng-container>
        </ng-template>
    </div>`,
                    host: {
                        '[class.p-stepper-content]': 'true',
                        '[class.p-element]': 'true',
                        '[class.p-toggleable-content]': "orientation === 'vertical'"
                    }
                }]
        }], propDecorators: { id: [{
                type: Input
            }], orientation: [{
                type: Input
            }], template: [{
                type: Input
            }], ariaLabelledby: [{
                type: Input
            }], stepperPanel: [{
                type: Input
            }], index: [{
                type: Input
            }], active: [{
                type: Input
            }], highlighted: [{
                type: Input
            }], onClick: [{
                type: Output
            }], prevCallback: [{
                type: Output
            }], nextCallback: [{
                type: Output
            }] } });
/**
 * StepperPanel is a helper component for Stepper component.
 * @group Components
 */
export class StepperPanel {
    /**
     * Orientation of tab headers.
     * @group Props
     */
    header;
    templates;
    headerTemplate;
    startTemplate;
    contentTemplate;
    separatorTemplate;
    endTemplate;
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'header':
                    this.headerTemplate = item.template;
                    break;
                case 'content':
                    this.contentTemplate = item.template;
                    break;
                case 'separator':
                    this.separatorTemplate = item.template;
                    break;
            }
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.1", ngImport: i0, type: StepperPanel, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.1", type: StepperPanel, selector: "p-stepperPanel", inputs: { header: "header" }, host: { classAttribute: "p-element" }, queries: [{ propertyName: "templates", predicate: PrimeTemplate }], ngImport: i0, template: ` <ng-content></ng-content> `, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.1", ngImport: i0, type: StepperPanel, decorators: [{
            type: Component,
            args: [{
                    selector: 'p-stepperPanel',
                    template: ` <ng-content></ng-content> `,
                    host: {
                        class: 'p-element'
                    }
                }]
        }], propDecorators: { header: [{
                type: Input
            }], templates: [{
                type: ContentChildren,
                args: [PrimeTemplate]
            }] } });
/**
 * The Stepper component displays a wizard-like workflow by guiding users through the multi-step progression.
 * @group Components
 */
export class Stepper {
    /**
     * Active step index of stepper.
     * @group Props
     */
    activeStep = 0;
    /**
     * Orientation of the stepper.
     * @group Props
     */
    orientation = 'horizontal';
    /**
     * Whether the steps are clickable or not.
     * @group Props
     */
    linear = false;
    /**
     * Transition options of the animation.
     * @group Props
     */
    transitionOptions = '400ms cubic-bezier(0.86, 0, 0.07, 1)';
    stepperPanels;
    templates;
    onClick = new EventEmitter();
    /**
     * Emitted when the value changes.
     * @param {ActiveStepChangeEvent} event - custom change event.
     * @group Emits
     */
    activeStepChange = new EventEmitter();
    headerTemplate;
    startTemplate;
    separatorTemplate;
    endTemplate;
    id = UniqueComponentId();
    panels;
    isStepActive(index) {
        return this.activeStep === index;
    }
    getStepProp(step) {
        if (step?.header) {
            return step.header;
        }
        if (step?.content) {
            return step.content;
        }
        return undefined;
    }
    getStepKey(step, index) {
        return this.getStepProp(step) || index;
    }
    getStepHeaderActionId(index) {
        return `${this.id}_${index}_header_action`;
    }
    getStepContentId(index) {
        return `${this.id}_${index}_content`;
    }
    updateActiveStep(event, index) {
        this.activeStep = index;
        this.activeStepChange.emit(this.activeStep);
    }
    onItemClick(event, index) {
        if (this.linear) {
            event.preventDefault();
            return;
        }
        if (index !== this.activeStep) {
            this.updateActiveStep(event, index);
        }
    }
    isItemDisabled(index) {
        return this.linear && !this.isStepActive(index);
    }
    prevCallback(event, index) {
        if (index !== 0) {
            this.updateActiveStep(event, index - 1);
        }
    }
    nextCallback(event, index) {
        if (index !== this.stepperPanels.length - 1) {
            this.updateActiveStep(event, index + 1);
        }
    }
    trackByFn(index) {
        return index;
    }
    ngAfterContentInit() {
        this.panels = this.stepperPanels.toArray();
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'start':
                    this.startTemplate = item.template;
                    break;
                case 'end':
                    this.endTemplate = item.template;
                    break;
                default:
                    break;
            }
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.1", ngImport: i0, type: Stepper, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.1", type: Stepper, selector: "p-stepper", inputs: { activeStep: "activeStep", orientation: "orientation", linear: "linear", transitionOptions: "transitionOptions" }, outputs: { onClick: "onClick", activeStepChange: "activeStepChange" }, host: { properties: { "class.p-stepper": "true", "class.p-component": "true", "class.p-stepper-vertical": "orientation === 'vertical'" } }, queries: [{ propertyName: "stepperPanels", predicate: StepperPanel }, { propertyName: "templates", predicate: PrimeTemplate }], ngImport: i0, template: `
        <div role="tablist">
            <ng-container *ngIf="startTemplate">
                <ng-container *ngTemplateOutlet="startTemplate"></ng-container>
            </ng-container>
            <ng-container *ngIf="orientation === 'horizontal'; else vertical">
                <ul class="p-stepper-nav">
                    <ng-template ngFor let-step [ngForOf]="panels" let-index="index" [ngForTrackBy]="trackByFn">
                        <li
                            [key]="getStepKey(step, index)"
                            class="p-stepper-header"
                            [ngClass]="{
                                'p-highlight': isStepActive(index),
                                'p-disabled': isItemDisabled(index)
                            }"
                            [attr.aria-current]="isStepActive(index) ? 'step' : undefined"
                            role="presentation"
                            [data-pc-name]="stepperPanel"
                            [data-p-highlight]="isStepActive(index)"
                            [data-p-disabled]="isItemDisabled(index)"
                            [data-pc-index]="index"
                            [data-p-active]="isStepActive(index)"
                        >
                            <p-stepperHeader
                                [id]="getStepHeaderActionId(index)"
                                [template]="step.headerTemplate"
                                [stepperPanel]="step"
                                [getStepProp]="getStepProp(step, 'header')"
                                [index]="index"
                                [disabled]="isItemDisabled(index)"
                                [active]="isStepActive(index)"
                                [highlighted]="index < activeStep"
                                [class]="'p-stepper-action'"
                                [aria-controls]="getStepContentId(index)"
                                (onClick)="onItemClick($event, index)"
                            ></p-stepperHeader>

                            <ng-container *ngIf="index !== stepperPanels.length - 1">
                                <p-stepperSeparator [template]="step.separatorTemplate" [separatorClass]="'p-stepper-separator'" [stepperPanel]="step" [index]="index" [active]="isStepActive(index)" [highlighted]="index < activeStep" />
                            </ng-container>
                        </li>
                    </ng-template>
                </ul>
                <div class="p-stepper-panels">
                    <ng-template ngFor let-step [ngForOf]="panels" let-index="index" [ngForTrackBy]="trackByFn">
                        <ng-container *ngIf="isStepActive(index)">
                            <p-stepperContent
                                [id]="getStepContentId(index)"
                                [template]="step.contentTemplate"
                                [orientation]="orientation"
                                [stepperPanel]="step"
                                [index]="index"
                                [active]="isStepActive(index)"
                                [highlighted]="index < activeStep"
                                [ariaLabelledby]="getStepHeaderActionId(index)"
                                (onClick)="onItemClick($event, index)"
                                (nextCallback)="nextCallback($event, index)"
                                (prevCallback)="prevCallback($event, index)"
                            />
                        </ng-container>
                    </ng-template>
                </div>
            </ng-container>
            <ng-template #vertical>
                <ng-template ngFor let-step [ngForOf]="panels" let-index="index" [ngForTrackBy]="trackByFn">
                    <div
                        [key]="getStepKey(step, index)"
                        class="p-stepper-panel"
                        [ngClass]="{
                            'p-stepper-panel-active': orientation === 'vertical' && isStepActive(index)
                        }"
                        [attr.aria-current]="isStepActive(index) ? 'step' : undefined"
                        [data-pc-name]="'stepperpanel'"
                        [data-p-highlight]="isStepActive(index)"
                        [data-p-disabled]="isItemDisabled(index)"
                        [data-pc-index]="index"
                        [data-p-active]="isStepActive(index)"
                    >
                        <div
                            class="p-stepper-header "
                            [ngClass]="{
                                'p-highlight': isStepActive(index),
                                'p-disabled': isItemDisabled(index)
                            }"
                        >
                            <p-stepperHeader
                                [id]="getStepHeaderActionId(index)"
                                [template]="step.headerTemplate"
                                [stepperPanel]="step"
                                [getStepProp]="getStepProp(step, 'header')"
                                [index]="index"
                                [disabled]="isItemDisabled(index)"
                                [active]="isStepActive(index)"
                                [highlighted]="index < activeStep"
                                [class]="'p-stepper-action'"
                                [aria-controls]="getStepContentId(index)"
                                (onClick)="onItemClick($event, index)"
                            ></p-stepperHeader>
                        </div>

                        <div class="p-stepper-toggleable-content" [@tabContent]="isStepActive(index) ? { value: 'visible', params: { transitionParams: transitionOptions } } : { value: 'hidden', params: { transitionParams: transitionOptions } }">
                            <ng-container *ngIf="index !== stepperPanels.length - 1">
                                <p-stepperSeparator [template]="step.separatorTemplate" [separatorClass]="'p-stepper-separator'" [stepperPanel]="step" [index]="index" [active]="isStepActive(index)" [highlighted]="index < activeStep" />
                            </ng-container>
                            <p-stepperContent
                                [id]="getStepContentId(index)"
                                [template]="step.contentTemplate"
                                [orientation]="orientation"
                                [stepperPanel]="step"
                                [index]="index"
                                [active]="isStepActive(index)"
                                [highlighted]="index < activeStep"
                                [ariaLabelledby]="getStepHeaderActionId(index)"
                                (onClick)="onItemClick($event, index)"
                                (nextCallback)="nextCallback($event, index)"
                                (prevCallback)="prevCallback($event, index)"
                            />
                        </div>
                    </div>
                </ng-template>
            </ng-template>
            <ng-container *ngIf="endTemplate">
                <ng-container *ngTemplateOutlet="endTemplate"></ng-container>
            </ng-container>
        </div>
    `, isInline: true, styles: ["@layer primeng{.p-stepper-vertical .p-stepper-panel>.p-stepper-toggleable-content{overflow:hidden}.p-stepper-vertical .p-stepper-panel-active>.p-stepper-toggleable-content:not(.ng-animating){overflow:inherit}}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: StepperContent, selector: "p-stepperContent", inputs: ["id", "orientation", "template", "ariaLabelledby", "stepperPanel", "index", "active", "highlighted"], outputs: ["onClick", "prevCallback", "nextCallback"] }, { kind: "component", type: StepperHeader, selector: "p-stepperHeader", inputs: ["id", "template", "stepperPanel", "index", "disabled", "active", "highlighted", "getStepProp", "ariaControls"], outputs: ["onClick"] }, { kind: "component", type: StepperSeparator, selector: "p-stepperSeparator", inputs: ["template", "separatorClass", "stepperPanel", "index", "active", "highlighted"] }], animations: [
            trigger('tabContent', [
                state('hidden', style({
                    height: '0',
                    visibility: 'hidden'
                })),
                state('visible', style({
                    height: '*',
                    visibility: 'visible'
                })),
                transition('visible <=> hidden', [animate('250ms cubic-bezier(0.86, 0, 0.07, 1)')]),
                transition('void => *', animate(0))
            ])
        ], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.1", ngImport: i0, type: Stepper, decorators: [{
            type: Component,
            args: [{ selector: 'p-stepper', template: `
        <div role="tablist">
            <ng-container *ngIf="startTemplate">
                <ng-container *ngTemplateOutlet="startTemplate"></ng-container>
            </ng-container>
            <ng-container *ngIf="orientation === 'horizontal'; else vertical">
                <ul class="p-stepper-nav">
                    <ng-template ngFor let-step [ngForOf]="panels" let-index="index" [ngForTrackBy]="trackByFn">
                        <li
                            [key]="getStepKey(step, index)"
                            class="p-stepper-header"
                            [ngClass]="{
                                'p-highlight': isStepActive(index),
                                'p-disabled': isItemDisabled(index)
                            }"
                            [attr.aria-current]="isStepActive(index) ? 'step' : undefined"
                            role="presentation"
                            [data-pc-name]="stepperPanel"
                            [data-p-highlight]="isStepActive(index)"
                            [data-p-disabled]="isItemDisabled(index)"
                            [data-pc-index]="index"
                            [data-p-active]="isStepActive(index)"
                        >
                            <p-stepperHeader
                                [id]="getStepHeaderActionId(index)"
                                [template]="step.headerTemplate"
                                [stepperPanel]="step"
                                [getStepProp]="getStepProp(step, 'header')"
                                [index]="index"
                                [disabled]="isItemDisabled(index)"
                                [active]="isStepActive(index)"
                                [highlighted]="index < activeStep"
                                [class]="'p-stepper-action'"
                                [aria-controls]="getStepContentId(index)"
                                (onClick)="onItemClick($event, index)"
                            ></p-stepperHeader>

                            <ng-container *ngIf="index !== stepperPanels.length - 1">
                                <p-stepperSeparator [template]="step.separatorTemplate" [separatorClass]="'p-stepper-separator'" [stepperPanel]="step" [index]="index" [active]="isStepActive(index)" [highlighted]="index < activeStep" />
                            </ng-container>
                        </li>
                    </ng-template>
                </ul>
                <div class="p-stepper-panels">
                    <ng-template ngFor let-step [ngForOf]="panels" let-index="index" [ngForTrackBy]="trackByFn">
                        <ng-container *ngIf="isStepActive(index)">
                            <p-stepperContent
                                [id]="getStepContentId(index)"
                                [template]="step.contentTemplate"
                                [orientation]="orientation"
                                [stepperPanel]="step"
                                [index]="index"
                                [active]="isStepActive(index)"
                                [highlighted]="index < activeStep"
                                [ariaLabelledby]="getStepHeaderActionId(index)"
                                (onClick)="onItemClick($event, index)"
                                (nextCallback)="nextCallback($event, index)"
                                (prevCallback)="prevCallback($event, index)"
                            />
                        </ng-container>
                    </ng-template>
                </div>
            </ng-container>
            <ng-template #vertical>
                <ng-template ngFor let-step [ngForOf]="panels" let-index="index" [ngForTrackBy]="trackByFn">
                    <div
                        [key]="getStepKey(step, index)"
                        class="p-stepper-panel"
                        [ngClass]="{
                            'p-stepper-panel-active': orientation === 'vertical' && isStepActive(index)
                        }"
                        [attr.aria-current]="isStepActive(index) ? 'step' : undefined"
                        [data-pc-name]="'stepperpanel'"
                        [data-p-highlight]="isStepActive(index)"
                        [data-p-disabled]="isItemDisabled(index)"
                        [data-pc-index]="index"
                        [data-p-active]="isStepActive(index)"
                    >
                        <div
                            class="p-stepper-header "
                            [ngClass]="{
                                'p-highlight': isStepActive(index),
                                'p-disabled': isItemDisabled(index)
                            }"
                        >
                            <p-stepperHeader
                                [id]="getStepHeaderActionId(index)"
                                [template]="step.headerTemplate"
                                [stepperPanel]="step"
                                [getStepProp]="getStepProp(step, 'header')"
                                [index]="index"
                                [disabled]="isItemDisabled(index)"
                                [active]="isStepActive(index)"
                                [highlighted]="index < activeStep"
                                [class]="'p-stepper-action'"
                                [aria-controls]="getStepContentId(index)"
                                (onClick)="onItemClick($event, index)"
                            ></p-stepperHeader>
                        </div>

                        <div class="p-stepper-toggleable-content" [@tabContent]="isStepActive(index) ? { value: 'visible', params: { transitionParams: transitionOptions } } : { value: 'hidden', params: { transitionParams: transitionOptions } }">
                            <ng-container *ngIf="index !== stepperPanels.length - 1">
                                <p-stepperSeparator [template]="step.separatorTemplate" [separatorClass]="'p-stepper-separator'" [stepperPanel]="step" [index]="index" [active]="isStepActive(index)" [highlighted]="index < activeStep" />
                            </ng-container>
                            <p-stepperContent
                                [id]="getStepContentId(index)"
                                [template]="step.contentTemplate"
                                [orientation]="orientation"
                                [stepperPanel]="step"
                                [index]="index"
                                [active]="isStepActive(index)"
                                [highlighted]="index < activeStep"
                                [ariaLabelledby]="getStepHeaderActionId(index)"
                                (onClick)="onItemClick($event, index)"
                                (nextCallback)="nextCallback($event, index)"
                                (prevCallback)="prevCallback($event, index)"
                            />
                        </div>
                    </div>
                </ng-template>
            </ng-template>
            <ng-container *ngIf="endTemplate">
                <ng-container *ngTemplateOutlet="endTemplate"></ng-container>
            </ng-container>
        </div>
    `, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        '[class.p-stepper]': 'true',
                        '[class.p-component]': 'true',
                        '[class.p-stepper-vertical]': "orientation === 'vertical'"
                    }, animations: [
                        trigger('tabContent', [
                            state('hidden', style({
                                height: '0',
                                visibility: 'hidden'
                            })),
                            state('visible', style({
                                height: '*',
                                visibility: 'visible'
                            })),
                            transition('visible <=> hidden', [animate('250ms cubic-bezier(0.86, 0, 0.07, 1)')]),
                            transition('void => *', animate(0))
                        ])
                    ], styles: ["@layer primeng{.p-stepper-vertical .p-stepper-panel>.p-stepper-toggleable-content{overflow:hidden}.p-stepper-vertical .p-stepper-panel-active>.p-stepper-toggleable-content:not(.ng-animating){overflow:inherit}}\n"] }]
        }], propDecorators: { activeStep: [{
                type: Input
            }], orientation: [{
                type: Input
            }], linear: [{
                type: Input
            }], transitionOptions: [{
                type: Input
            }], stepperPanels: [{
                type: ContentChildren,
                args: [StepperPanel]
            }], templates: [{
                type: ContentChildren,
                args: [PrimeTemplate]
            }], onClick: [{
                type: Output
            }], activeStepChange: [{
                type: Output
            }] } });
export class StepperModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.1", ngImport: i0, type: StepperModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.1", ngImport: i0, type: StepperModule, declarations: [Stepper, StepperPanel, StepperPanel, StepperContent, StepperHeader, StepperSeparator], imports: [CommonModule, SharedModule], exports: [Stepper, StepperPanel, StepperContent, StepperHeader, StepperSeparator, SharedModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.1", ngImport: i0, type: StepperModule, imports: [CommonModule, SharedModule, SharedModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.1", ngImport: i0, type: StepperModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, SharedModule],
                    exports: [Stepper, StepperPanel, StepperContent, StepperHeader, StepperSeparator, SharedModule],
                    declarations: [Stepper, StepperPanel, StepperPanel, StepperContent, StepperHeader, StepperSeparator]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9zdGVwcGVyL3N0ZXBwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBb0IsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQTBCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hMLE9BQU8sRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTFELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFpQ2pGLE1BQU0sT0FBTyxhQUFhO0lBQ2IsRUFBRSxDQUFxQjtJQUV2QixRQUFRLENBQStCO0lBRXZDLFlBQVksQ0FBZTtJQUUzQixLQUFLLENBQXFCO0lBRTFCLFFBQVEsQ0FBc0I7SUFFOUIsTUFBTSxDQUFzQjtJQUU1QixXQUFXLENBQXNCO0lBRWpDLFdBQVcsQ0FBcUI7SUFFaEMsWUFBWSxDQUFxQjtJQUVoQyxPQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQzt1R0FuQnBDLGFBQWE7MkZBQWIsYUFBYSx1VkE3Qlo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXdCVDs7MkZBS1EsYUFBYTtrQkEvQnpCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F3QlQ7b0JBQ0QsSUFBSSxFQUFFO3dCQUNGLEtBQUssRUFBRSxXQUFXO3FCQUNyQjtpQkFDSjs4QkFFWSxFQUFF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IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgTmdNb2R1bGUsIE91dHB1dCwgUXVlcnlMaXN0LCBUZW1wbGF0ZVJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByaW1lVGVtcGxhdGUsIFNoYXJlZE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcbmltcG9ydCB7IE51bGxhYmxlIH0gZnJvbSAncHJpbWVuZy90cy1oZWxwZXJzJztcbmltcG9ydCB7IFVuaXF1ZUNvbXBvbmVudElkIH0gZnJvbSAncHJpbWVuZy91dGlscyc7XG5pbXBvcnQgeyBhbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLXN0ZXBwZXJIZWFkZXInLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0ZW1wbGF0ZTsgZWxzZSBidXR0b25SZWZcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAqbmdUZW1wbGF0ZU91dGxldD1cIlxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBhY3RpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWdobGlnaHRlZDogaGlnaGxpZ2h0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Atc3RlcHBlci1hY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyQ2xhc3M6ICdwLXN0ZXBwZXItYWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlckNsYXNzOiAncC1zdGVwcGVyLW51bWJlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZUNsYXNzOiAncC1zdGVwcGVyLXRpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6IG9uQ2xpY2tcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICA+PC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctdGVtcGxhdGUgI2J1dHRvblJlZj5cbiAgICAgICAgICAgIDxwLWJ1dHRvbiBbaWRdPVwiaWRcIiBjbGFzcz1cInAtc3RlcHBlci1hY3Rpb25cIiByb2xlPVwidGFiXCIgW3RhYmluZGV4XT1cImRpc2FibGVkID8gLTEgOiB1bmRlZmluZWRcIiBbYXJpYS1jb250cm9sc109XCJhcmlhQ29udHJvbHNcIiAoY2xpY2spPVwib25DbGljay5lbWl0KCRldmVudCwgaW5kZXgpXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwLXN0ZXBwZXItbnVtYmVyXCI+e3sgaW5kZXggKyAxIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicC1zdGVwcGVyLXRpdGxlXCI+e3sgZ2V0U3RlcFByb3AgfX08L3NwYW4+XG4gICAgICAgICAgICA8L3AtYnV0dG9uPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgIGAsXG4gICAgaG9zdDoge1xuICAgICAgICBjbGFzczogJ3AtZWxlbWVudCdcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIFN0ZXBwZXJIZWFkZXIge1xuICAgIEBJbnB1dCgpIGlkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICBASW5wdXQoKSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiB8IHVuZGVmaW5lZDtcblxuICAgIEBJbnB1dCgpIHN0ZXBwZXJQYW5lbDogU3RlcHBlclBhbmVsO1xuXG4gICAgQElucHV0KCkgaW5kZXg6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG4gICAgQElucHV0KCkgYWN0aXZlOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG4gICAgQElucHV0KCkgaGlnaGxpZ2h0ZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cbiAgICBASW5wdXQoKSBnZXRTdGVwUHJvcDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgQElucHV0KCkgYXJpYUNvbnRyb2xzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICBAT3V0cHV0KCkgb25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLXN0ZXBwZXJTZXBhcmF0b3InLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0ZW1wbGF0ZTsgZWxzZSBzcGFuXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGU7IGNvbnRleHQ6IHsgaW5kZXg6IGluZGV4LCBhY3RpdmU6IGFjdGl2ZSwgaGlnaGxpZ2h0ZWQ6IGhpZ2hsaWdodGVkLCBjbGFzczogc2VwYXJhdG9yQ2xhc3MgfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPG5nLXRlbXBsYXRlICNzcGFuPlxuICAgICAgICAgICAgPHNwYW4gW2NsYXNzXT1cInNlcGFyYXRvckNsYXNzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgIGAsXG4gICAgaG9zdDoge1xuICAgICAgICBjbGFzczogJ3Atc3RlcHBlci1zZXBhcmF0b3InXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBTdGVwcGVyU2VwYXJhdG9yIHtcbiAgICBASW5wdXQoKSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiB8IHVuZGVmaW5lZDtcblxuICAgIEBJbnB1dCgpIHNlcGFyYXRvckNsYXNzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICBASW5wdXQoKSBzdGVwcGVyUGFuZWw6IFN0ZXBwZXJQYW5lbDtcblxuICAgIEBJbnB1dCgpIGluZGV4OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICBASW5wdXQoKSBhY3RpdmU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cbiAgICBASW5wdXQoKSBoaWdobGlnaHRlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLXN0ZXBwZXJDb250ZW50JyxcbiAgICB0ZW1wbGF0ZTogYCA8ZGl2IFtpZF09XCJpZFwiIHJvbGU9XCJ0YWJwYW5lbFwiIGRhdGEtcGMtbmFtZT1cInN0ZXBwZXJwYW5lbFwiIFthdHRyLmRhdGEtcGMtaW5kZXhdPVwiaW5kZXhcIiBbYXR0ci5kYXRhLXAtYWN0aXZlXT1cImFjdGl2ZVwiIFthdHRyLmFyaWEtbGFiZWxsZWRieV09XCJhcmlhTGFiZWxsZWRieVwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidGVtcGxhdGVcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZTsgY29udGV4dDogeyBpbmRleDogaW5kZXgsIGFjdGl2ZTogYWN0aXZlLCBoaWdobGlnaHRlZDogaGlnaGxpZ2h0ZWQsIG9uQ2xpY2s6IG9uQ2xpY2ssIHByZXZDYWxsYmFjazogcHJldkNhbGxiYWNrLCBuZXh0Q2FsbGJhY2s6IG5leHRDYWxsYmFjayB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctdGVtcGxhdGUgKm5nSWY9XCIhdGVtcGxhdGVcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzdGVwcGVyUGFuZWxcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwic3RlcHBlclBhbmVsXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8L2Rpdj5gLFxuXG4gICAgaG9zdDoge1xuICAgICAgICAnW2NsYXNzLnAtc3RlcHBlci1jb250ZW50XSc6ICd0cnVlJyxcbiAgICAgICAgJ1tjbGFzcy5wLWVsZW1lbnRdJzogJ3RydWUnLFxuICAgICAgICAnW2NsYXNzLnAtdG9nZ2xlYWJsZS1jb250ZW50XSc6IFwib3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCdcIlxuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgU3RlcHBlckNvbnRlbnQge1xuICAgIEBJbnB1dCgpIGlkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICBASW5wdXQoKSBvcmllbnRhdGlvbjogJ3ZlcnRpY2FsJyB8ICdob3Jpem9udGFsJztcblxuICAgIEBJbnB1dCgpIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkO1xuXG4gICAgQElucHV0KCkgYXJpYUxhYmVsbGVkYnk6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIEBJbnB1dCgpIHN0ZXBwZXJQYW5lbDogU3RlcHBlclBhbmVsO1xuXG4gICAgQElucHV0KCkgaW5kZXg6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIEBJbnB1dCgpIGFjdGl2ZTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuICAgIEBJbnB1dCgpIGhpZ2hsaWdodGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG4gICAgQE91dHB1dCgpIG9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgICBAT3V0cHV0KCkgcHJldkNhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gICAgQE91dHB1dCgpIG5leHRDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbn1cblxuLyoqXG4gKiBTdGVwcGVyUGFuZWwgaXMgYSBoZWxwZXIgY29tcG9uZW50IGZvciBTdGVwcGVyIGNvbXBvbmVudC5cbiAqIEBncm91cCBDb21wb25lbnRzXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC1zdGVwcGVyUGFuZWwnLFxuICAgIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbiAgICBob3N0OiB7XG4gICAgICAgIGNsYXNzOiAncC1lbGVtZW50J1xuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgU3RlcHBlclBhbmVsIHtcbiAgICAvKipcbiAgICAgKiBPcmllbnRhdGlvbiBvZiB0YWIgaGVhZGVycy5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBoZWFkZXI6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIEBDb250ZW50Q2hpbGRyZW4oUHJpbWVUZW1wbGF0ZSkgdGVtcGxhdGVzOiBOdWxsYWJsZTxRdWVyeUxpc3Q8UHJpbWVUZW1wbGF0ZT4+O1xuXG4gICAgaGVhZGVyVGVtcGxhdGU6IE51bGxhYmxlPFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gICAgc3RhcnRUZW1wbGF0ZTogTnVsbGFibGU8VGVtcGxhdGVSZWY8YW55Pj47XG5cbiAgICBjb250ZW50VGVtcGxhdGU6IE51bGxhYmxlPFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gICAgc2VwYXJhdG9yVGVtcGxhdGU6IE51bGxhYmxlPFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gICAgZW5kVGVtcGxhdGU6IE51bGxhYmxlPFRlbXBsYXRlUmVmPGFueT4+O1xuXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgICAgICAodGhpcy50ZW1wbGF0ZXMgYXMgUXVlcnlMaXN0PFByaW1lVGVtcGxhdGU+KS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKGl0ZW0uZ2V0VHlwZSgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnaGVhZGVyJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2NvbnRlbnQnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3NlcGFyYXRvcic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VwYXJhdG9yVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4vKipcbiAqIFRoZSBTdGVwcGVyIGNvbXBvbmVudCBkaXNwbGF5cyBhIHdpemFyZC1saWtlIHdvcmtmbG93IGJ5IGd1aWRpbmcgdXNlcnMgdGhyb3VnaCB0aGUgbXVsdGktc3RlcCBwcm9ncmVzc2lvbi5cbiAqIEBncm91cCBDb21wb25lbnRzXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncC1zdGVwcGVyJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IHJvbGU9XCJ0YWJsaXN0XCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic3RhcnRUZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJzdGFydFRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnOyBlbHNlIHZlcnRpY2FsXCI+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwicC1zdGVwcGVyLW5hdlwiPlxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbmdGb3IgbGV0LXN0ZXAgW25nRm9yT2ZdPVwicGFuZWxzXCIgbGV0LWluZGV4PVwiaW5kZXhcIiBbbmdGb3JUcmFja0J5XT1cInRyYWNrQnlGblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2tleV09XCJnZXRTdGVwS2V5KHN0ZXAsIGluZGV4KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwLXN0ZXBwZXItaGVhZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwLWhpZ2hsaWdodCc6IGlzU3RlcEFjdGl2ZShpbmRleCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwLWRpc2FibGVkJzogaXNJdGVtRGlzYWJsZWQoaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1jdXJyZW50XT1cImlzU3RlcEFjdGl2ZShpbmRleCkgPyAnc3RlcCcgOiB1bmRlZmluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkYXRhLXBjLW5hbWVdPVwic3RlcHBlclBhbmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGF0YS1wLWhpZ2hsaWdodF09XCJpc1N0ZXBBY3RpdmUoaW5kZXgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGF0YS1wLWRpc2FibGVkXT1cImlzSXRlbURpc2FibGVkKGluZGV4KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2RhdGEtcGMtaW5kZXhdPVwiaW5kZXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkYXRhLXAtYWN0aXZlXT1cImlzU3RlcEFjdGl2ZShpbmRleClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLXN0ZXBwZXJIZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lkXT1cImdldFN0ZXBIZWFkZXJBY3Rpb25JZChpbmRleClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwic3RlcC5oZWFkZXJUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzdGVwcGVyUGFuZWxdPVwic3RlcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtnZXRTdGVwUHJvcF09XCJnZXRTdGVwUHJvcChzdGVwLCAnaGVhZGVyJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5kZXhdPVwiaW5kZXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiaXNJdGVtRGlzYWJsZWQoaW5kZXgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2FjdGl2ZV09XCJpc1N0ZXBBY3RpdmUoaW5kZXgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2hpZ2hsaWdodGVkXT1cImluZGV4IDwgYWN0aXZlU3RlcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzc109XCIncC1zdGVwcGVyLWFjdGlvbidcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXJpYS1jb250cm9sc109XCJnZXRTdGVwQ29udGVudElkKGluZGV4KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkNsaWNrKT1cIm9uSXRlbUNsaWNrKCRldmVudCwgaW5kZXgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wLXN0ZXBwZXJIZWFkZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaW5kZXggIT09IHN0ZXBwZXJQYW5lbHMubGVuZ3RoIC0gMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1zdGVwcGVyU2VwYXJhdG9yIFt0ZW1wbGF0ZV09XCJzdGVwLnNlcGFyYXRvclRlbXBsYXRlXCIgW3NlcGFyYXRvckNsYXNzXT1cIidwLXN0ZXBwZXItc2VwYXJhdG9yJ1wiIFtzdGVwcGVyUGFuZWxdPVwic3RlcFwiIFtpbmRleF09XCJpbmRleFwiIFthY3RpdmVdPVwiaXNTdGVwQWN0aXZlKGluZGV4KVwiIFtoaWdobGlnaHRlZF09XCJpbmRleCA8IGFjdGl2ZVN0ZXBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLXN0ZXBwZXItcGFuZWxzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtc3RlcCBbbmdGb3JPZl09XCJwYW5lbHNcIiBsZXQtaW5kZXg9XCJpbmRleFwiIFtuZ0ZvclRyYWNrQnldPVwidHJhY2tCeUZuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNTdGVwQWN0aXZlKGluZGV4KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLXN0ZXBwZXJDb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJnZXRTdGVwQ29udGVudElkKGluZGV4KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJzdGVwLmNvbnRlbnRUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtvcmllbnRhdGlvbl09XCJvcmllbnRhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzdGVwcGVyUGFuZWxdPVwic3RlcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbmRleF09XCJpbmRleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthY3RpdmVdPVwiaXNTdGVwQWN0aXZlKGluZGV4KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtoaWdobGlnaHRlZF09XCJpbmRleCA8IGFjdGl2ZVN0ZXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXJpYUxhYmVsbGVkYnldPVwiZ2V0U3RlcEhlYWRlckFjdGlvbklkKGluZGV4KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkNsaWNrKT1cIm9uSXRlbUNsaWNrKCRldmVudCwgaW5kZXgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG5leHRDYWxsYmFjayk9XCJuZXh0Q2FsbGJhY2soJGV2ZW50LCBpbmRleClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocHJldkNhbGxiYWNrKT1cInByZXZDYWxsYmFjaygkZXZlbnQsIGluZGV4KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgI3ZlcnRpY2FsPlxuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtc3RlcCBbbmdGb3JPZl09XCJwYW5lbHNcIiBsZXQtaW5kZXg9XCJpbmRleFwiIFtuZ0ZvclRyYWNrQnldPVwidHJhY2tCeUZuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIFtrZXldPVwiZ2V0U3RlcEtleShzdGVwLCBpbmRleClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwLXN0ZXBwZXItcGFuZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwLXN0ZXBwZXItcGFuZWwtYWN0aXZlJzogb3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcgJiYgaXNTdGVwQWN0aXZlKGluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWN1cnJlbnRdPVwiaXNTdGVwQWN0aXZlKGluZGV4KSA/ICdzdGVwJyA6IHVuZGVmaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbZGF0YS1wYy1uYW1lXT1cIidzdGVwcGVycGFuZWwnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtkYXRhLXAtaGlnaGxpZ2h0XT1cImlzU3RlcEFjdGl2ZShpbmRleClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2RhdGEtcC1kaXNhYmxlZF09XCJpc0l0ZW1EaXNhYmxlZChpbmRleClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2RhdGEtcGMtaW5kZXhdPVwiaW5kZXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2RhdGEtcC1hY3RpdmVdPVwiaXNTdGVwQWN0aXZlKGluZGV4KVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInAtc3RlcHBlci1oZWFkZXIgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwLWhpZ2hsaWdodCc6IGlzU3RlcEFjdGl2ZShpbmRleCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwLWRpc2FibGVkJzogaXNJdGVtRGlzYWJsZWQoaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtc3RlcHBlckhlYWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaWRdPVwiZ2V0U3RlcEhlYWRlckFjdGlvbklkKGluZGV4KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJzdGVwLmhlYWRlclRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0ZXBwZXJQYW5lbF09XCJzdGVwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2dldFN0ZXBQcm9wXT1cImdldFN0ZXBQcm9wKHN0ZXAsICdoZWFkZXInKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbmRleF09XCJpbmRleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJpc0l0ZW1EaXNhYmxlZChpbmRleClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYWN0aXZlXT1cImlzU3RlcEFjdGl2ZShpbmRleClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaGlnaGxpZ2h0ZWRdPVwiaW5kZXggPCBhY3RpdmVTdGVwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzXT1cIidwLXN0ZXBwZXItYWN0aW9uJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthcmlhLWNvbnRyb2xzXT1cImdldFN0ZXBDb250ZW50SWQoaW5kZXgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uQ2xpY2spPVwib25JdGVtQ2xpY2soJGV2ZW50LCBpbmRleClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3Atc3RlcHBlckhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1zdGVwcGVyLXRvZ2dsZWFibGUtY29udGVudFwiIFtAdGFiQ29udGVudF09XCJpc1N0ZXBBY3RpdmUoaW5kZXgpID8geyB2YWx1ZTogJ3Zpc2libGUnLCBwYXJhbXM6IHsgdHJhbnNpdGlvblBhcmFtczogdHJhbnNpdGlvbk9wdGlvbnMgfSB9IDogeyB2YWx1ZTogJ2hpZGRlbicsIHBhcmFtczogeyB0cmFuc2l0aW9uUGFyYW1zOiB0cmFuc2l0aW9uT3B0aW9ucyB9IH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaW5kZXggIT09IHN0ZXBwZXJQYW5lbHMubGVuZ3RoIC0gMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1zdGVwcGVyU2VwYXJhdG9yIFt0ZW1wbGF0ZV09XCJzdGVwLnNlcGFyYXRvclRlbXBsYXRlXCIgW3NlcGFyYXRvckNsYXNzXT1cIidwLXN0ZXBwZXItc2VwYXJhdG9yJ1wiIFtzdGVwcGVyUGFuZWxdPVwic3RlcFwiIFtpbmRleF09XCJpbmRleFwiIFthY3RpdmVdPVwiaXNTdGVwQWN0aXZlKGluZGV4KVwiIFtoaWdobGlnaHRlZF09XCJpbmRleCA8IGFjdGl2ZVN0ZXBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLXN0ZXBwZXJDb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJnZXRTdGVwQ29udGVudElkKGluZGV4KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJzdGVwLmNvbnRlbnRUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtvcmllbnRhdGlvbl09XCJvcmllbnRhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzdGVwcGVyUGFuZWxdPVwic3RlcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbmRleF09XCJpbmRleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthY3RpdmVdPVwiaXNTdGVwQWN0aXZlKGluZGV4KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtoaWdobGlnaHRlZF09XCJpbmRleCA8IGFjdGl2ZVN0ZXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXJpYUxhYmVsbGVkYnldPVwiZ2V0U3RlcEhlYWRlckFjdGlvbklkKGluZGV4KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkNsaWNrKT1cIm9uSXRlbUNsaWNrKCRldmVudCwgaW5kZXgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG5leHRDYWxsYmFjayk9XCJuZXh0Q2FsbGJhY2soJGV2ZW50LCBpbmRleClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocHJldkNhbGxiYWNrKT1cInByZXZDYWxsYmFjaygkZXZlbnQsIGluZGV4KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJlbmRUZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJlbmRUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBzdHlsZVVybHM6IFsnLi9zdGVwcGVyLmNzcyddLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ1tjbGFzcy5wLXN0ZXBwZXJdJzogJ3RydWUnLFxuICAgICAgICAnW2NsYXNzLnAtY29tcG9uZW50XSc6ICd0cnVlJyxcbiAgICAgICAgJ1tjbGFzcy5wLXN0ZXBwZXItdmVydGljYWxdJzogXCJvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJ1wiXG4gICAgfSxcbiAgICBhbmltYXRpb25zOiBbXG4gICAgICAgIHRyaWdnZXIoJ3RhYkNvbnRlbnQnLCBbXG4gICAgICAgICAgICBzdGF0ZShcbiAgICAgICAgICAgICAgICAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzAnLFxuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgc3RhdGUoXG4gICAgICAgICAgICAgICAgJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgIHN0eWxlKHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnKicsXG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgdHJhbnNpdGlvbigndmlzaWJsZSA8PT4gaGlkZGVuJywgW2FuaW1hdGUoJzI1MG1zIGN1YmljLWJlemllcigwLjg2LCAwLCAwLjA3LCAxKScpXSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBhbmltYXRlKDApKVxuICAgICAgICBdKVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU3RlcHBlciBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICAgIC8qKlxuICAgICAqIEFjdGl2ZSBzdGVwIGluZGV4IG9mIHN0ZXBwZXIuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgYWN0aXZlU3RlcDogbnVtYmVyIHwgdW5kZWZpbmVkIHwgbnVsbCA9IDA7XG4gICAgLyoqXG4gICAgICogT3JpZW50YXRpb24gb2YgdGhlIHN0ZXBwZXIuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgb3JpZW50YXRpb246ICd2ZXJ0aWNhbCcgfCAnaG9yaXpvbnRhbCcgPSAnaG9yaXpvbnRhbCc7XG4gICAgLyoqXG4gICAgICogV2hldGhlciB0aGUgc3RlcHMgYXJlIGNsaWNrYWJsZSBvciBub3QuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgbGluZWFyOiBib29sZWFuID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogVHJhbnNpdGlvbiBvcHRpb25zIG9mIHRoZSBhbmltYXRpb24uXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgQElucHV0KCkgdHJhbnNpdGlvbk9wdGlvbnM6IHN0cmluZyA9ICc0MDBtcyBjdWJpYy1iZXppZXIoMC44NiwgMCwgMC4wNywgMSknO1xuXG4gICAgQENvbnRlbnRDaGlsZHJlbihTdGVwcGVyUGFuZWwpIHN0ZXBwZXJQYW5lbHM6IFF1ZXJ5TGlzdDxTdGVwcGVyUGFuZWw+IHwgdW5kZWZpbmVkO1xuXG4gICAgQENvbnRlbnRDaGlsZHJlbihQcmltZVRlbXBsYXRlKSB0ZW1wbGF0ZXM6IFF1ZXJ5TGlzdDxQcmltZVRlbXBsYXRlPiB8IHVuZGVmaW5lZDtcblxuICAgIEBPdXRwdXQoKSBvbkNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gICAgLyoqXG4gICAgICogRW1pdHRlZCB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzLlxuICAgICAqIEBwYXJhbSB7QWN0aXZlU3RlcENoYW5nZUV2ZW50fSBldmVudCAtIGN1c3RvbSBjaGFuZ2UgZXZlbnQuXG4gICAgICogQGdyb3VwIEVtaXRzXG4gICAgICovXG4gICAgQE91dHB1dCgpIGFjdGl2ZVN0ZXBDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgICBoZWFkZXJUZW1wbGF0ZTogTnVsbGFibGU8VGVtcGxhdGVSZWY8YW55Pj47XG5cbiAgICBzdGFydFRlbXBsYXRlOiBOdWxsYWJsZTxUZW1wbGF0ZVJlZjxhbnk+PjtcblxuICAgIHNlcGFyYXRvclRlbXBsYXRlOiBOdWxsYWJsZTxUZW1wbGF0ZVJlZjxhbnk+PjtcblxuICAgIGVuZFRlbXBsYXRlOiBOdWxsYWJsZTxUZW1wbGF0ZVJlZjxhbnk+PjtcblxuICAgIGlkOiBzdHJpbmcgPSBVbmlxdWVDb21wb25lbnRJZCgpO1xuXG4gICAgcGFuZWxzITogU3RlcHBlclBhbmVsW107XG5cbiAgICBpc1N0ZXBBY3RpdmUoaW5kZXg6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVTdGVwID09PSBpbmRleDtcbiAgICB9XG5cbiAgICBnZXRTdGVwUHJvcChzdGVwKSB7XG4gICAgICAgIGlmIChzdGVwPy5oZWFkZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGVwLmhlYWRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGVwPy5jb250ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gc3RlcC5jb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgZ2V0U3RlcEtleShzdGVwLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRTdGVwUHJvcChzdGVwKSB8fCBpbmRleDtcbiAgICB9XG5cbiAgICBnZXRTdGVwSGVhZGVyQWN0aW9uSWQoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuaWR9XyR7aW5kZXh9X2hlYWRlcl9hY3Rpb25gO1xuICAgIH1cblxuICAgIGdldFN0ZXBDb250ZW50SWQoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuaWR9XyR7aW5kZXh9X2NvbnRlbnRgO1xuICAgIH1cblxuICAgIHVwZGF0ZUFjdGl2ZVN0ZXAoZXZlbnQsIGluZGV4KSB7XG4gICAgICAgIHRoaXMuYWN0aXZlU3RlcCA9IGluZGV4O1xuXG4gICAgICAgIHRoaXMuYWN0aXZlU3RlcENoYW5nZS5lbWl0KHRoaXMuYWN0aXZlU3RlcCk7XG4gICAgfVxuXG4gICAgb25JdGVtQ2xpY2soZXZlbnQsIGluZGV4KSB7XG4gICAgICAgIGlmICh0aGlzLmxpbmVhcikge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleCAhPT0gdGhpcy5hY3RpdmVTdGVwKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2ZVN0ZXAoZXZlbnQsIGluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzSXRlbURpc2FibGVkKGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpbmVhciAmJiAhdGhpcy5pc1N0ZXBBY3RpdmUoaW5kZXgpO1xuICAgIH1cblxuICAgIHByZXZDYWxsYmFjayhldmVudCwgaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2ZVN0ZXAoZXZlbnQsIGluZGV4IC0gMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZXh0Q2FsbGJhY2soZXZlbnQsIGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCAhPT0gdGhpcy5zdGVwcGVyUGFuZWxzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQWN0aXZlU3RlcChldmVudCwgaW5kZXggKyAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRyYWNrQnlGbihpbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cblxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAgICAgdGhpcy5wYW5lbHMgPSAodGhpcy5zdGVwcGVyUGFuZWxzIGFzIFF1ZXJ5TGlzdDxTdGVwcGVyUGFuZWw+KS50b0FycmF5KCk7XG4gICAgICAgICh0aGlzLnRlbXBsYXRlcyBhcyBRdWVyeUxpc3Q8UHJpbWVUZW1wbGF0ZT4pLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoaXRlbS5nZXRUeXBlKCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdzdGFydCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmRUZW1wbGF0ZSA9IGl0ZW0udGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBTaGFyZWRNb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtTdGVwcGVyLCBTdGVwcGVyUGFuZWwsIFN0ZXBwZXJDb250ZW50LCBTdGVwcGVySGVhZGVyLCBTdGVwcGVyU2VwYXJhdG9yLCBTaGFyZWRNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW1N0ZXBwZXIsIFN0ZXBwZXJQYW5lbCwgU3RlcHBlclBhbmVsLCBTdGVwcGVyQ29udGVudCwgU3RlcHBlckhlYWRlciwgU3RlcHBlclNlcGFyYXRvcl1cbn0pXG5leHBvcnQgY2xhc3MgU3RlcHBlck1vZHVsZSB7fVxuIl19