package org.voluntrack.voluntrack.vo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import org.voluntrack.voluntrack.enums.ResponseStatus;

@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)
public class ResponseVO<T> {
    private String statusMessage;
    private String errorMessage;
    private ResponseStatus responseStatus;
    private Integer code;
    private T data;
}
