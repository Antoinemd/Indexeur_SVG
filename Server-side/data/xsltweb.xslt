<?xml version="1.0" encoding="UTF-8"?>

<!-- La racine -->
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" 
xmlns:sv="http://www.w3.org/2000/svg" exclude-result-prefixes="sv">
<xsl:strip-space elements="*"/>

<!-- Le format de sortie -->
<xsl:output method="text" encoding="UTF-8" indent="yes" ></xsl:output>

<!-- Version utilisée avec les "sv" pour effectuer des test de validité du xslt/JSON produit avec le navigateur-->


<xsl:template match="/">
	{
	"image" : {
        "_nom_image" : "",
		"formes" : 
		[
		<xsl:apply-templates select="sv:svg"/>
		]
	}	
	}
</xsl:template>

 
<xsl:template match="sv:svg">
	<xsl:for-each select="//sv:rect|//sv:circle|//sv:ellipse|//sv:line|//sv:polyline|//sv:polygon">
	{
	"genre" : "<xsl:value-of select="local-name(.)" />",
	
	<xsl:apply-templates select="."/>
	}
	<xsl:if test="./following-sibling::sv:rect|./following-sibling::sv:circle|./following-sibling::sv:ellipse|./following-sibling::sv:line|./following-sibling::sv:polyline|./following-sibling::sv:polygon">,</xsl:if>
	</xsl:for-each>
</xsl:template>

<xsl:template match="sv:rect">
	"couleur" : "<xsl:value-of select="@fill"/>"
</xsl:template>

<xsl:template match="sv:circle"> 	
    "couleur" : "<xsl:value-of select="@fill"/>"
</xsl:template>

<xsl:template match="sv:ellipse">
	"couleur" : "<xsl:value-of select="@fill"/>"
</xsl:template>

<xsl:template match="sv:line">	
  	"couleur" : "<xsl:value-of select="@fill"/>"
</xsl:template>

<xsl:template match="sv:polyline">
	"couleur" : "<xsl:value-of select="@fill"/>"
</xsl:template>

<xsl:template match="sv:polygon">
	"couleur" : "<xsl:value-of select="@fill"/>"
</xsl:template>


</xsl:stylesheet>


