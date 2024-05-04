/**
 * Dialogs can be created dynamically with any component as the content using a DialogService.
 * @group Components
 */
export class DynamicDialogConfig {
    /**
     * An object to pass to the component loaded inside the Dialog.
     * @group Props
     */
    data;
    /**
     * Header text of the dialog.
     * @group Props
     */
    header;
    /**
     * Identifies the element (or elements) that labels the element it is applied to.
     * @group Props
     */
    ariaLabelledBy;
    /**
     * Footer text of the dialog.
     * @group Props
     */
    footer;
    /**
     * Width of the dialog.
     * @group Props
     */
    width;
    /**
     * Height of the dialog.
     * @group Props
     */
    height;
    /**
     * Specifies if pressing escape key should hide the dialog.
     * @group Props
     */
    closeOnEscape;
    /**
     * Specifies if autofocus should happen on show.
     * @group Props
     */
    focusOnShow = true;
    /**
     * Base zIndex value to use in layering.
     * @group Props
     */
    baseZIndex;
    /**
     * Whether to automatically manage layering.
     * @group Props
     */
    autoZIndex;
    /**
     * Specifies if clicking the modal background should hide the dialog.
     * @group Props
     */
    dismissableMask;
    /**
     * Inline style of the component.
     * @group Props
     */
    rtl;
    /**
     * Inline style of the comopnent.
     * @group Props
     */
    style;
    /**
     * Inline style of the content.
     * @group Props
     */
    contentStyle;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass;
    /**
     * Transition options of the animation.
     * @group Props
     */
    transitionOptions;
    /**
     * Adds a close icon to the header to hide the dialog.
     * @group Props
     */
    closable;
    /**
     * Whether to show the header or not.
     * @group Props
     */
    showHeader;
    /**
     * Defines if background should be blocked when dialog is displayed.
     * @group Props
     */
    modal;
    /**
     * Style class of the mask.
     * @group Props
     */
    maskStyleClass;
    /**
     * Enables resizing of the content.
     * @group Props
     */
    resizable;
    /**
     * Enables dragging to change the position using header.
     * @group Props
     */
    draggable;
    /**
     * Keeps dialog in the viewport.
     * @group Props
     */
    keepInViewport;
    /**
     * Minimum value for the left coordinate of dialog in dragging.
     * @group Props
     */
    minX;
    /**
     * Minimum value for the top coordinate of dialog in dragging.
     * @group Props
     */
    minY;
    /**
     * Whether the dialog can be displayed full screen.
     * @group Props
     */
    maximizable;
    /**
     * Name of the maximize icon.
     * @group Props
     */
    maximizeIcon;
    /**
     * Name of the minimize icon.
     * @group Props
     */
    minimizeIcon;
    /**
     * Position of the dialog, options are "center", "top", "bottom", "left", "right", "top-left", "top-right", "bottom-left" or "bottom-right".
     * @group Props
     */
    position;
    /**
     * Defines a string that labels the close button for accessibility.
     * @group Props
     */
    closeAriaLabel;
    /**
     * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @group Props
     */
    appendTo;
    /**
     * A boolean to determine if it can be duplicate.
     * @group Props
     */
    duplicate;
    /**
     * Object literal to define widths per screen size.
     * @group Props
     */
    breakpoints;
    /**
     * Dialog templates.
     * @group Props
     */
    templates;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pY2RpYWxvZy1jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudHMvZHluYW1pY2RpYWxvZy9keW5hbWljZGlhbG9nLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTs7O0dBR0c7QUFDSCxNQUFNLE9BQU8sbUJBQW1CO0lBQzVCOzs7T0FHRztJQUNILElBQUksQ0FBSztJQUNUOzs7T0FHRztJQUNILE1BQU0sQ0FBVTtJQUNoQjs7O09BR0c7SUFDSCxjQUFjLENBQVU7SUFDeEI7OztPQUdHO0lBQ0gsTUFBTSxDQUFVO0lBQ2hCOzs7T0FHRztJQUNILEtBQUssQ0FBVTtJQUNmOzs7T0FHRztJQUNILE1BQU0sQ0FBVTtJQUNoQjs7O09BR0c7SUFDSCxhQUFhLENBQVc7SUFDeEI7OztPQUdHO0lBQ0gsV0FBVyxHQUFhLElBQUksQ0FBQztJQUM3Qjs7O09BR0c7SUFDSCxVQUFVLENBQVU7SUFDcEI7OztPQUdHO0lBQ0gsVUFBVSxDQUFXO0lBQ3JCOzs7T0FHRztJQUNILGVBQWUsQ0FBVztJQUMxQjs7O09BR0c7SUFDSCxHQUFHLENBQVc7SUFDZDs7O09BR0c7SUFDSCxLQUFLLENBQStDO0lBQ3BEOzs7T0FHRztJQUNILFlBQVksQ0FBK0M7SUFDM0Q7OztPQUdHO0lBQ0gsVUFBVSxDQUFVO0lBQ3BCOzs7T0FHRztJQUNILGlCQUFpQixDQUFVO0lBQzNCOzs7T0FHRztJQUNILFFBQVEsQ0FBVztJQUNuQjs7O09BR0c7SUFDSCxVQUFVLENBQVc7SUFDckI7OztPQUdHO0lBQ0gsS0FBSyxDQUFXO0lBQ2hCOzs7T0FHRztJQUNILGNBQWMsQ0FBVTtJQUN4Qjs7O09BR0c7SUFDSCxTQUFTLENBQVc7SUFDcEI7OztPQUdHO0lBQ0gsU0FBUyxDQUFXO0lBQ3BCOzs7T0FHRztJQUNILGNBQWMsQ0FBVztJQUN6Qjs7O09BR0c7SUFDSCxJQUFJLENBQVU7SUFDZDs7O09BR0c7SUFDSCxJQUFJLENBQVU7SUFDZDs7O09BR0c7SUFDSCxXQUFXLENBQVc7SUFDdEI7OztPQUdHO0lBQ0gsWUFBWSxDQUFVO0lBQ3RCOzs7T0FHRztJQUNILFlBQVksQ0FBVTtJQUN0Qjs7O09BR0c7SUFDSCxRQUFRLENBQVU7SUFDbEI7OztPQUdHO0lBQ0gsY0FBYyxDQUFVO0lBQ3hCOzs7T0FHRztJQUNILFFBQVEsQ0FBTztJQUNmOzs7T0FHRztJQUNILFNBQVMsQ0FBVztJQUNwQjs7O09BR0c7SUFDSCxXQUFXLENBQU87SUFDbEI7OztPQUdHO0lBQ0gsU0FBUyxDQUEwQjtDQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBEaWFsb2dzIGNhbiBiZSBjcmVhdGVkIGR5bmFtaWNhbGx5IHdpdGggYW55IGNvbXBvbmVudCBhcyB0aGUgY29udGVudCB1c2luZyBhIERpYWxvZ1NlcnZpY2UuXG4gKiBAZ3JvdXAgQ29tcG9uZW50c1xuICovXG5leHBvcnQgY2xhc3MgRHluYW1pY0RpYWxvZ0NvbmZpZzxUID0gYW55PiB7XG4gICAgLyoqXG4gICAgICogQW4gb2JqZWN0IHRvIHBhc3MgdG8gdGhlIGNvbXBvbmVudCBsb2FkZWQgaW5zaWRlIHRoZSBEaWFsb2cuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgZGF0YT86IFQ7XG4gICAgLyoqXG4gICAgICogSGVhZGVyIHRleHQgb2YgdGhlIGRpYWxvZy5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBoZWFkZXI/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogSWRlbnRpZmllcyB0aGUgZWxlbWVudCAob3IgZWxlbWVudHMpIHRoYXQgbGFiZWxzIHRoZSBlbGVtZW50IGl0IGlzIGFwcGxpZWQgdG8uXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgYXJpYUxhYmVsbGVkQnk/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogRm9vdGVyIHRleHQgb2YgdGhlIGRpYWxvZy5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBmb290ZXI/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogV2lkdGggb2YgdGhlIGRpYWxvZy5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICB3aWR0aD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBIZWlnaHQgb2YgdGhlIGRpYWxvZy5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBoZWlnaHQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogU3BlY2lmaWVzIGlmIHByZXNzaW5nIGVzY2FwZSBrZXkgc2hvdWxkIGhpZGUgdGhlIGRpYWxvZy5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBjbG9zZU9uRXNjYXBlPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBTcGVjaWZpZXMgaWYgYXV0b2ZvY3VzIHNob3VsZCBoYXBwZW4gb24gc2hvdy5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBmb2N1c09uU2hvdz86IGJvb2xlYW4gPSB0cnVlO1xuICAgIC8qKlxuICAgICAqIEJhc2UgekluZGV4IHZhbHVlIHRvIHVzZSBpbiBsYXllcmluZy5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBiYXNlWkluZGV4PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdG8gYXV0b21hdGljYWxseSBtYW5hZ2UgbGF5ZXJpbmcuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgYXV0b1pJbmRleD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogU3BlY2lmaWVzIGlmIGNsaWNraW5nIHRoZSBtb2RhbCBiYWNrZ3JvdW5kIHNob3VsZCBoaWRlIHRoZSBkaWFsb2cuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgZGlzbWlzc2FibGVNYXNrPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBJbmxpbmUgc3R5bGUgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBydGw/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIElubGluZSBzdHlsZSBvZiB0aGUgY29tb3BuZW50LlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIHN0eWxlPzogeyBba2xhc3M6IHN0cmluZ106IGFueSB9IHwgbnVsbCB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBJbmxpbmUgc3R5bGUgb2YgdGhlIGNvbnRlbnQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgY29udGVudFN0eWxlPzogeyBba2xhc3M6IHN0cmluZ106IGFueSB9IHwgbnVsbCB8IHVuZGVmaW5lZDtcbiAgICAvKipcbiAgICAgKiBTdHlsZSBjbGFzcyBvZiB0aGUgY29tcG9uZW50LlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIHN0eWxlQ2xhc3M/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVHJhbnNpdGlvbiBvcHRpb25zIG9mIHRoZSBhbmltYXRpb24uXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgdHJhbnNpdGlvbk9wdGlvbnM/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQWRkcyBhIGNsb3NlIGljb24gdG8gdGhlIGhlYWRlciB0byBoaWRlIHRoZSBkaWFsb2cuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgY2xvc2FibGU/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdG8gc2hvdyB0aGUgaGVhZGVyIG9yIG5vdC5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBzaG93SGVhZGVyPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGlmIGJhY2tncm91bmQgc2hvdWxkIGJlIGJsb2NrZWQgd2hlbiBkaWFsb2cgaXMgZGlzcGxheWVkLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIG1vZGFsPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBTdHlsZSBjbGFzcyBvZiB0aGUgbWFzay5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBtYXNrU3R5bGVDbGFzcz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBFbmFibGVzIHJlc2l6aW5nIG9mIHRoZSBjb250ZW50LlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIHJlc2l6YWJsZT86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogRW5hYmxlcyBkcmFnZ2luZyB0byBjaGFuZ2UgdGhlIHBvc2l0aW9uIHVzaW5nIGhlYWRlci5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBkcmFnZ2FibGU/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEtlZXBzIGRpYWxvZyBpbiB0aGUgdmlld3BvcnQuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAga2VlcEluVmlld3BvcnQ/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIE1pbmltdW0gdmFsdWUgZm9yIHRoZSBsZWZ0IGNvb3JkaW5hdGUgb2YgZGlhbG9nIGluIGRyYWdnaW5nLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIG1pblg/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogTWluaW11bSB2YWx1ZSBmb3IgdGhlIHRvcCBjb29yZGluYXRlIG9mIGRpYWxvZyBpbiBkcmFnZ2luZy5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBtaW5ZPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIGRpYWxvZyBjYW4gYmUgZGlzcGxheWVkIGZ1bGwgc2NyZWVuLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIG1heGltaXphYmxlPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBOYW1lIG9mIHRoZSBtYXhpbWl6ZSBpY29uLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIG1heGltaXplSWNvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBOYW1lIG9mIHRoZSBtaW5pbWl6ZSBpY29uLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIG1pbmltaXplSWNvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBQb3NpdGlvbiBvZiB0aGUgZGlhbG9nLCBvcHRpb25zIGFyZSBcImNlbnRlclwiLCBcInRvcFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIiwgXCJyaWdodFwiLCBcInRvcC1sZWZ0XCIsIFwidG9wLXJpZ2h0XCIsIFwiYm90dG9tLWxlZnRcIiBvciBcImJvdHRvbS1yaWdodFwiLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIHBvc2l0aW9uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIERlZmluZXMgYSBzdHJpbmcgdGhhdCBsYWJlbHMgdGhlIGNsb3NlIGJ1dHRvbiBmb3IgYWNjZXNzaWJpbGl0eS5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBjbG9zZUFyaWFMYWJlbD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBUYXJnZXQgZWxlbWVudCB0byBhdHRhY2ggdGhlIG92ZXJsYXksIHZhbGlkIHZhbHVlcyBhcmUgXCJib2R5XCIgb3IgYSBsb2NhbCBuZy10ZW1wbGF0ZSB2YXJpYWJsZSBvZiBhbm90aGVyIGVsZW1lbnQgKG5vdGU6IHVzZSBiaW5kaW5nIHdpdGggYnJhY2tldHMgZm9yIHRlbXBsYXRlIHZhcmlhYmxlcywgZS5nLiBbYXBwZW5kVG9dPVwibXlkaXZcIiBmb3IgYSBkaXYgZWxlbWVudCBoYXZpbmcgI215ZGl2IGFzIHZhcmlhYmxlIG5hbWUpLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIGFwcGVuZFRvPzogYW55O1xuICAgIC8qKlxuICAgICAqIEEgYm9vbGVhbiB0byBkZXRlcm1pbmUgaWYgaXQgY2FuIGJlIGR1cGxpY2F0ZS5cbiAgICAgKiBAZ3JvdXAgUHJvcHNcbiAgICAgKi9cbiAgICBkdXBsaWNhdGU/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIE9iamVjdCBsaXRlcmFsIHRvIGRlZmluZSB3aWR0aHMgcGVyIHNjcmVlbiBzaXplLlxuICAgICAqIEBncm91cCBQcm9wc1xuICAgICAqL1xuICAgIGJyZWFrcG9pbnRzPzogYW55O1xuICAgIC8qKlxuICAgICAqIERpYWxvZyB0ZW1wbGF0ZXMuXG4gICAgICogQGdyb3VwIFByb3BzXG4gICAgICovXG4gICAgdGVtcGxhdGVzPzogRHluYW1pY0RpYWxvZ1RlbXBsYXRlcztcbn1cblxuLyoqXG4gKiBEZWZpbmVzIHZhbGlkIHRlbXBsYXRlcyBpbiBEeW5hbWljIERpYWxvZy5cbiAqIEBncm91cCBJbnRlcmZhY2VcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEeW5hbWljRGlhbG9nVGVtcGxhdGVzIHtcbiAgICAvKipcbiAgICAgKiBUZW1wbGF0ZSBvZiB0aGUgaGVhZGVyLlxuICAgICAqL1xuICAgIGhlYWRlcj86IFR5cGU8YW55PjtcbiAgICAvKipcbiAgICAgKiBUZW1wbGF0ZSBvZiB0aGUgY29udGVudC5cbiAgICAgKi9cbiAgICBjb250ZW50PzogVHlwZTxhbnk+O1xuICAgIC8qKlxuICAgICAqIFRlbXBsYXRlIG9mIHRoZSBmb290ZXIuXG4gICAgICovXG4gICAgZm9vdGVyPzogVHlwZTxhbnk+O1xuICAgIC8qKlxuICAgICAqIFRlbXBsYXRlIG9mIHRoZSBtaW5pbWl6ZSBpY29uLlxuICAgICAqL1xuICAgIG1pbmltaXplaWNvbj86IFR5cGU8YW55PjtcbiAgICAvKipcbiAgICAgKiBUZW1wbGF0ZSBvZiB0aGUgbWF4aW1pemUgaWNvbi5cbiAgICAgKi9cbiAgICBtYXhpbWl6ZWljb24/OiBUeXBlPGFueT47XG4gICAgLyoqXG4gICAgICogVGVtcGxhdGUgb2YgdGhlIGNsb3NlIGljb24uXG4gICAgICovXG4gICAgY2xvc2VpY29uPzogVHlwZTxhbnk+O1xufVxuIl19